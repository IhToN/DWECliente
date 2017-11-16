const svgNS = "http://www.w3.org/2000/svg";
const FPS = 60;
const BLOCK_WIDTH = 60;
const BLOCK_HEIGHT = 15;
const MAX_ROWS = 15;

const CANVAS = document.getElementById('arkanoid');
const CANVAS_WIDTH = parseInt(CANVAS.getAttribute('width'));
const CANVAS_HEIGHT = parseInt(CANVAS.getAttribute('height'));

class Arkanoid {
    constructor() {
        this.ball = new Ball(this);
        this.player = new Player(this);
        this.blocks = [];

        this.initBlocks();
        this.drawLives();
    }

    clearLives() {
        let lives = CANVAS.querySelectorAll('.live');
        Array.prototype.forEach.call(lives, (live) => {
            CANVAS.removeChild(live);
        });
    }

    drawLives() {
        for (let i = 1; i <= this.player.lives; i++) {
            let liveElem = document.createElementNS(svgNS, 'circle');
            liveElem.setAttribute('class', 'live');
            liveElem.setAttributeNS(null, 'stroke', 'black');
            liveElem.setAttributeNS(null, 'fill', 'red');
            liveElem.setAttributeNS(null, 'stroke-width', 2);
            liveElem.setAttributeNS(null, 'cx', (15 + i * 5 * 3).toString());
            liveElem.setAttributeNS(null, 'cy', (CANVAS_HEIGHT - 15).toString());
            liveElem.setAttributeNS(null, 'r', (5).toString());

            CANVAS.appendChild(liveElem);
        }
    }

    repaintLives() {
        this.clearLives();
        this.drawLives();
    }

    initBlocks() {
        let columns = Math.floor(CANVAS_WIDTH / BLOCK_WIDTH);
        let rows = Math.floor(CANVAS_HEIGHT / BLOCK_HEIGHT);
        rows = rows > MAX_ROWS ? MAX_ROWS : rows;
        let hor_margin = columns / 2;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                let randomColor = '#' + (Math.random().toString(16) + '000000').slice(2, 8);
                this.blocks.push(new Block(this, hor_margin + j * BLOCK_WIDTH, i * BLOCK_HEIGHT, randomColor, BLOCK_WIDTH, BLOCK_HEIGHT));
            }
        }
    }
}

class Element {
    constructor(game, shape, startx, starty, color) {
        this.game = game;
        this.shape = shape;
        this.x = startx;
        this.y = starty;
        this.strokeWidth = 2;
        this.color = color;

        this.element = document.createElementNS(svgNS, this.shape);
        this.element.setAttributeNS(null, 'stroke', 'black');
        this.element.setAttributeNS(null, 'fill', this.color);
        this.element.setAttributeNS(null, 'stroke-width', this.strokeWidth);
    }

    init() {
        CANVAS.appendChild(this.element);
    }
}

class Block extends Element {
    constructor(game, sx, sy, color, width, height) {
        super(game, 'rect', sx, sy, color);
        this.width = width;
        this.height = height;

        this.element.setAttributeNS(null, 'x', this.x);
        this.element.setAttributeNS(null, 'y', this.y);
        this.element.setAttributeNS(null, 'width', this.width);
        this.element.setAttributeNS(null, 'height', this.height);
        this.init();
    }

    remove() {
        this.element.parentNode.removeChild(this.element);
    }
}

class Ball extends Element {
    constructor(game, color = 'white', speed = 4, radius = 8) {
        super(game, 'circle', ((CANVAS_WIDTH / 2) - (radius / 2)), (CANVAS_HEIGHT - 10 * radius), color);
        this.speed = speed;
        this.radius = radius;
        this.down = false;
        this.right = false;

        this.element.setAttributeNS(null, 'cx', this.x);
        this.element.setAttributeNS(null, 'cy', this.y);
        this.element.setAttributeNS(null, 'r', this.radius);
        this.init();
        this.initMovement();
    }

    checkBorderCollision() {
        if (this.x >= CANVAS_WIDTH - this.radius) this.right = false;
        else if (this.x <= this.radius) this.right = true;
        if (this.y >= CANVAS_HEIGHT - this.radius) this.bottomCollision();
        else if (this.y <= this.radius) this.down = true;
    }

    bottomCollision() {
        this.down = false;
        this.game.player.injure();
    }

    checkPlayerCollision() {
        let bndPlt = this.element.getBoundingClientRect();
        let bndChk = this.game.player.element.getBoundingClientRect();

        if (bndChk.left <= bndPlt.right &&
            bndChk.right >= bndPlt.left &&
            bndChk.top <= bndPlt.bottom &&
            bndChk.bottom >= bndPlt.top) this.down = false;
    }

    checkBlocksCollision() {
        this.game.blocks.forEach((block) => {
            this.checkBlockCollision(block);
        })
    }

    checkBlockCollision(block) {
        let bndPlt = this.element.getBoundingClientRect();
        let bndChk = block.element.getBoundingClientRect();

        if (bndChk.left <= bndPlt.right &&
            bndChk.right >= bndPlt.left &&
            bndChk.top <= bndPlt.bottom &&
            bndChk.bottom >= bndPlt.top) {
            this.down = true;
            block.remove();
        }
    }


    initMovement() {
        this.movInt = setInterval(() => {
            this.x += (this.right ? this.speed : -this.speed);
            this.y += (this.down ? this.speed : -this.speed);
            this.element.setAttribute('cx', this.x);
            this.element.setAttribute('cy', this.y);

            this.checkBorderCollision();
            this.checkPlayerCollision();
            this.checkBlocksCollision();
        }, 1000 / FPS)
    }
}

class Player extends Element {
    constructor(game, color = 'blue', width = '125', height = '10', lives = 5, speed = 15) {
        super(game, 'rect', ((CANVAS_WIDTH / 2) - (width / 2)), (CANVAS_HEIGHT - 5 * height), color);
        this.width = width;
        this.height = height;
        this.lives = lives;
        this.speed = speed;

        this.element.setAttributeNS(null, 'x', this.x);
        this.element.setAttributeNS(null, 'y', this.y);
        this.element.setAttributeNS(null, 'width', this.width);
        this.element.setAttributeNS(null, 'height', this.height);
        this.init();
    }

    checkRightCollision() {
        return this.x >= CANVAS_WIDTH - this.width;
    }

    checkLeftCollision() {
        return this.x <= 0;
    }

    moveListener(event) {
        if (event.keyCode === 37 && !this.checkLeftCollision()) { // left arrow
            event.preventDefault();
            this.movePlayer(-this.speed);
        } else if (event.keyCode === 39 && !this.checkRightCollision()) { // right arrow
            event.preventDefault();
            this.movePlayer(this.speed);
        }
    }

    movePlayer(speed) {
        this.x += speed;
        this.element.setAttribute('x', this.x);
    }

    injure() {
        if (this.lives >= 1) {
            this.lives -= 1;
            this.game.repaintLives();
        } else {
            this.death();
        }
    }

    death() {
        console.log("Te has muerto, pero te dejo jugar pa' que te entretengas un rato.")
    }
}

window.addEventListener('load', () => {
    if (CANVAS) {
        let game = new Arkanoid();
        window.addEventListener('keydown', (event) => {
            game.player.moveListener(event);
        })
    }
});