const SVGNS = "http://www.w3.org/2000/svg";
const CANVAS = document.getElementById('notespace');
const CANVAS_WIDTH = parseInt(CANVAS.getAttribute('width'));
const CANVAS_HEIGHT = parseInt(CANVAS.getAttribute('height'));

/*==========================
    MODEL
==========================*/
class Note {
    constructor(title = '', message = '', time = new Date()) {
        this._title = title;
        this._message = message;
        this._time = time;
    }


    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get message() {
        return this._message;
    }

    set message(value) {
        this._message = value;
    }

    get time() {
        return this._time;
    }

    set time(value) {
        this._time = value;
    }
}

class StickyNotes {
    constructor() {
        this.notes = [];
    }

    addNote(note) {
        if (note instanceof Note) {
            this.notes.push(note);
        }
    }

    rmNote(note) {
        if (this.notes.includes(note)) {
            this.notes.splice(this.notes.indexOf(note), 1);
        }
    }
}

/*==========================
    VIEW
==========================*/
class SVGRect {
    constructor(color = 'yellow', startx = 0, starty = 0) {
        this.color = color;
        this.x = startx;
        this.y = starty;
        this.strokeWidth = 2;
        this.initSVG();
    }

    initSVG() {
        this.element = document.createElementNS(SVGNS, 'rect');
        this.element.setAttributeNS(null, 'stroke', 'black');
        this.element.setAttributeNS(null, 'fill', this.color);
        this.element.setAttributeNS(null, 'x', this.x);
        this.element.setAttributeNS(null, 'y', this.y);
        this.element.setAttributeNS(null, 'stroke-width', this.strokeWidth);
        this.element.setAttributeNS(null, 'width', this.width);
        this.element.setAttributeNS(null, 'height', this.height);
        CANVAS.appendChild(this.element);
    }
}

class NoteView {
    constructor(note) {
        this.note = note;

        this.initGroup();
    }

    initGroup() {
        this.group = document.createElementNS(SVGNS, 'g');
        this.group.setAttribute('transform', 'translate(50,50)');
        this.initRect();
        this.initTitle();
        this.initMessage();
        CANVAS.appendChild(this.group);
    }

    initRect() {
        let notewidth = '200';
        let noteheight = '100';

        let notebg = document.createElementNS(SVGNS, 'rect');
        notebg.setAttributeNS(null, 'x', '0');
        notebg.setAttributeNS(null, 'y', '0');
        notebg.setAttributeNS(null, 'width', notewidth);
        notebg.setAttributeNS(null, 'height', noteheight);
        notebg.setAttributeNS(null, 'stroke', 'black');
        notebg.setAttributeNS(null, 'fill', 'yellow');
        notebg.setAttributeNS(null, 'stroke-width', '1');

        let stroke = document.createElementNS(SVGNS, 'rect');
        stroke.setAttributeNS(null, 'x', '0');
        stroke.setAttributeNS(null, 'y', '25');
        stroke.setAttributeNS(null, 'width', notewidth);
        stroke.setAttributeNS(null, 'height', '1');
        stroke.setAttributeNS(null, 'stroke', 'black');
        stroke.setAttributeNS(null, 'fill', 'yellow');
        stroke.setAttributeNS(null, 'stroke-width', '1');


        this.group.appendChild(notebg);
        this.group.appendChild(stroke);
    }

    initTitle() {
        let title = document.createElementNS(SVGNS, 'text');
        title.innerHTML = this.note.title;
        title.setAttributeNS(null, 'x', '10');
        title.setAttributeNS(null, 'y', '20');
        title.setAttributeNS(null, 'font-family', 'Verdana');
        this.group.appendChild(title);
    }

    initMessage() {
        let message = document.createElementNS(SVGNS, 'text');
        message.innerHTML = this.note.message;
        message.setAttributeNS(null, 'x', '10');
        message.setAttributeNS(null, 'y', '40');
        message.setAttributeNS(null, 'font-family', 'Verdana');
        message.setAttributeNS(null, 'font-size', '12');
        this.group.appendChild(message);
    }
}

window.addEventListener('load', () => {
    let nota = new Note('titulo', 'mensaje');
    let nview = new NoteView(nota);
});