const svgNS = "http://www.w3.org/2000/svg";
const FPS = 60;

const canvas = document.getElementById('arkanoid');
const canvasWidth = parseInt(canvas.getAttribute('width'));
const canvasHeight = parseInt(canvas.getAttribute('height'));

class Arkanoid {
    constructor() {
        this.ball = new Ball(this);
        this.player = new Player(this);

        this.drawLives();
    }

    clearLives() {
        let lives = canvas.querySelectorAll('.live');
        Array.prototype.forEach.call(lives, (live) => {
           canvas.removeChild(live);
        });
    }

    drawLives() {
        for(let i = 1; i <= this.player.lives; i++) {
            let liveElem = document.createElementNS(svgNS, 'circle');
            liveElem.setAttribute('class', 'live');
            liveElem.setAttributeNS(null, 'stroke', 'black');
            liveElem.setAttributeNS(null, 'fill', 'red');
            liveElem.setAttributeNS(null, 'stroke-width', 2);
            liveElem.setAttributeNS(null, 'cx', 15 + i * 5 * 3);
            liveElem.setAttributeNS(null, 'cy', 15);
            liveElem.setAttributeNS(null, 'r', 5);

            canvas.appendChild(liveElem);
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
        canvas.appendChild(this.element);
    }
}

class Bar extends Element {
    constructor(sx, sy, color, width, height) {
        super('rect', sx, sy, color);
        this.width = width;
        this.height = height;
    }
}

class Ball extends Element {
    constructor(game, color = 'white', speed = 4, radius = 8) {
        super(game, 'circle', ((canvasWidth / 2) - (radius / 2)), (canvasHeight - 10 * radius), color);
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
        if (this.x >= canvasWidth - this.radius) this.right = false;
        else if (this.x <= this.radius) this.right = true;
        if (this.y >= canvasHeight - this.radius) this.bottomCollision();
        else if (this.y <= this.radius) this.down = true;
    }

    bottomCollision() {
        this.down = false;
        this.game.player.lives -= 1;
        this.game.clearLives();
        this.game.drawLives();
    }

    checkPlayerCollision() {
        let bndPlt = this.element.getBoundingClientRect();
        let bndChk = this.game.player.element.getBoundingClientRect();

        if (bndChk.left <= bndPlt.right &&
            bndChk.right >= bndPlt.left &&
            bndChk.top <= bndPlt.bottom &&
            bndChk.bottom >= bndPlt.top) this.down = false;
    }


    initMovement() {
        this.movInt = setInterval(() => {
            this.x += (this.right ? this.speed : -this.speed);
            this.y += (this.down ? this.speed : -this.speed);
            this.element.setAttribute('cx', this.x);
            this.element.setAttribute('cy', this.y);

            this.checkBorderCollision();
            this.checkPlayerCollision();
        }, 1000 / FPS)
    }
}

class Player extends Element {
    constructor(game, color = 'blue', width = '125', height = '10', lives = 3, speed = 10) {
        super(game, 'rect', ((canvasWidth / 2) - (width / 2)), (canvasHeight - 5 * height), color);
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
        return this.x >= canvasWidth - this.width;
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
}

window.addEventListener('load', () => {
    let game = new Arkanoid();
    window.addEventListener('keydown', (event) => {
        game.player.moveListener(event);
    })
});