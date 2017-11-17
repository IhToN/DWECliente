const svgNS = "http://www.w3.org/2000/svg";
const FPS = 60;
const BLOCK_WIDTH = 120;
const BLOCK_HEIGHT = 30;
const MAX_ROWS = 6;

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
                //if (j % 2 == 0) continue;
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
    constructor(game, color = 'white', speedx = 4, speedy = 4, radius = 8) {
        super(game, 'circle', ((CANVAS_WIDTH / 2) - (radius / 2)), (CANVAS_HEIGHT - 10 * radius), color);
        this.speedx = speedx;
        this.speedy = speedy;
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
        let division = this.game.player.width / 3;

        let horCol = bndChk.left <= bndPlt.right &&
            bndChk.right >= bndPlt.left;
        let verCol = bndChk.top <= bndPlt.bottom &&
            bndChk.bottom >= bndPlt.top;
        if (horCol && verCol) {
            this.down = false;

            if (bndPlt.left <= bndChk.left + division) this.right = false;
            else if (bndPlt.right >= bndChk.right - division) this.right = true;
        }
    }

    checkBlocksCollision() {
        this.game.blocks.forEach((block) => {
            this.checkBlockCollision(block);
        })
    }

    checkBlockCollision(block) {
        let bndPlt = this.element.getBoundingClientRect();
        let bndChk = block.element.getBoundingClientRect();

        let horCol = bndChk.left <= bndPlt.right &&
            bndChk.right >= bndPlt.left;
        let verCol = bndChk.top <= bndPlt.bottom &&
            bndChk.bottom >= bndPlt.top;
        if (horCol && verCol) {
            block.remove();
            //this.right = !this.right;
            if (bndChk.top <= bndPlt.bottom && bndChk.bottom <= bndPlt.bottom) this.down = true;
            else if (bndChk.bottom >= bndPlt.top && bndChk.top >= bndPlt.top) this.down = false;

            if (bndPlt.left <= bndChk.right && bndPlt.right >= bndChk.right) this.right = true;
            else if (bndPlt.right >= bndChk.left && bndPlt.left <= bndChk.left) this.right = false;
        }
    }


    initMovement() {
        this.movInt = setInterval(() => {
            this.x += (this.right ? this.speedx : -this.speedx);
            this.y += (this.down ? this.speedy : -this.speedy);
            this.element.setAttribute('cx', this.x);
            this.element.setAttribute('cy', this.y);

            this.checkBorderCollision();
            this.checkPlayerCollision();
            this.checkBlocksCollision();
        }, 1000 / FPS)
    }
}

class Player extends Element {
    constructor(game, color = 'blue', width = '125', height = '10', lives = 5, speed = 7) {
        super(game, 'rect', ((CANVAS_WIDTH / 2) - (width / 2)), (CANVAS_HEIGHT - 5 * height), color);
        this.width = width;
        this.height = height;
        this.lives = lives;
        this.speed = speed;
        this.right = false;
        this.left = false;

        this.element.setAttributeNS(null, 'x', this.x);
        this.element.setAttributeNS(null, 'y', this.y);
        this.element.setAttributeNS(null, 'width', this.width);
        this.element.setAttributeNS(null, 'height', this.height);
        this.init();
        this.initListener();
    }

    initListener() {
        this.movInt = setInterval(() => {
            this.x += (this.right && !this.checkRightCollision() ? this.speed : (this.left && !this.checkLeftCollision() ? -this.speed : 0));
            this.element.setAttributeNS(null, 'x', this.x);
        }, 1000 / FPS);
    }

    checkRightCollision() {
        return this.x >= CANVAS_WIDTH - this.width;
    }

    checkLeftCollision() {
        return this.x <= 0;
    }

    keyDown(event) {
        if (event.keyCode === 37) { // left arrow
            event.preventDefault();
            this.left = true;
        } else if (event.keyCode === 39) { // right arrow
            event.preventDefault();
            this.right = true;
        }
    }

    keyUp(event) {
        if (event.keyCode === 37) { // left arrow
            event.preventDefault();
            this.left = false;
        } else if (event.keyCode === 39) { // right arrow
            event.preventDefault();
            this.right = false;
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
            game.player.keyDown(event);
        })
        window.addEventListener('keyup', (event) => {
            game.player.keyUp(event);
        })
    }
});