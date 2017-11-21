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

class NotesBox {
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
class NoteView {
    constructor(snotes, note) {
        this.snotes = snotes;
        this.note = note;

        this.initGroup();
    }

    initGroup() {
        this.group = document.createElement('div');
        this.group.setAttribute('class', 'note');
        this.initTitle();
        this.initMessage();
        this.initEdit();
        this.initDelete();
        NotesBoxView.CANVAS.appendChild(this.group);
    }

    initTitle() {
        let title = document.createElement('div');
        title.innerHTML = this.note.title;
        title.setAttribute('class', 'title');
        this.group.appendChild(title);
    }

    initMessage() {
        let message = document.createElement('div');
        message.innerHTML = this.note.message;
        message.setAttribute('class', 'message');
        this.group.appendChild(message);
    }

    initEdit() {
        let rm = document.createElement('div');
        rm.setAttribute('class', 'edit');
        rm.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
        this.group.appendChild(rm);

        rm.addEventListener('click', () => {
            //todo: edit note
        })
    }

    initDelete() {
        let rm = document.createElement('div');
        rm.setAttribute('class', 'delete');
        rm.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
        this.group.appendChild(rm);

        rm.addEventListener('click', () => {
            this.snotes.deleteNote(this);
        })
    }
}

class NotesBoxView {
    constructor() {
        this.notes = [];
    }

    static get CANVAS() {
        return document.getElementById('notespace');
    }

    addNView(noteview) {
        if (noteview instanceof NoteView) {
            this.notes.push(noteview);
        }
    }

    rmNView(noteview) {
        if (this.notes.includes(noteview)) {
            this.notes.splice(this.notes.indexOf(noteview), 1);
            NotesBoxView.CANVAS.removeChild(noteview.group);
        }
    }
}

/*==========================
    CONTROLLER
==========================*/
class StickyNotes {
    constructor() {
        this.notesbox = new NotesBox();
        this.nviewsbox = new NotesBoxView();
    }

    createNote(title = '', message = '') {
        let note = new Note(title, message);
        let nview = new NoteView(this, note);

        this.notesbox.addNote(note);
        this.nviewsbox.addNView(nview);
    }

    deleteNote(nview) {
        this.notesbox.rmNote(nview.note);
        this.nviewsbox.rmNView(nview);
    }
}


window.addEventListener('load', () => {
    const snotes = new StickyNotes();
    snotes.createNote('título', 'mensaje');
});