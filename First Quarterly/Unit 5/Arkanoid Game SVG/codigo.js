let svgNS = "http://www.w3.org/2000/svg";
let FPS = 60;
let canvas = document.getElementById('arkanoid');

let canvasWidth = parseInt(canvas.getAttribute('width'));
let canvasHeight = parseInt(canvas.getAttribute('height'));

class Element {
    constructor(shape, startx, starty, color) {
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
    constructor(sx, sy, color = 'white', speed = 4, radius = 5) {
        super('circle', sx, sy, color);
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
        if (this.y >= canvasHeight - this.radius) this.down = false;
        else if (this.y <= this.radius) this.down = true;
    }

    initMovement() {
        setInterval(() => {
            this.x += (this.right ? this.speed : -this.speed);
            this.y += (this.down ? this.speed : -this.speed);
            this.element.setAttribute('cx', this.x);
            this.element.setAttribute('cy', this.y);

            this.checkBorderCollision();
        }, 1000 / FPS)
    }
}

class Player extends Element {
    constructor(color = 'blue', width = '125', height = '10', lives = 3, speed = 10) {
        super('rect', ((canvasWidth / 2) - (width / 2)), (canvasHeight - 5 * height), color);
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

    checkRightCollission() {
        return this.x >= canvasWidth - this.width;
    }
    checkLeftCollission() {
        return this.x <= 0;
    }

    moveListener(event) {
        if (event.keyCode === 37 && !this.checkLeftCollission()) { // left arrow
            event.preventDefault();
            this.movePlayer(-this.speed);
        } else if (event.keyCode === 39 && !this.checkRightCollission()) { // right arrow
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
    const ball = new Ball(50, 50);
    const player = new Player();

    window.addEventListener('keydown', (event) => {
        player.moveListener(event);
    })
});