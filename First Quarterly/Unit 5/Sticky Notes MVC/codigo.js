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
    constructor(snotes) {
        this.snotes = snotes;
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

        this.group = document.createElement('div');
        this.initGroup();
    }

    initGroup() {
        this.clearGroup();
        this.group.setAttribute('class', 'note');
        this.initTitle();
        this.initMessage();
        this.initEdit();
        this.initDelete();
        NotesBoxView.CANVAS.appendChild(this.group);
    }

    clearGroup() {
        while (this.group.firstChild) {
            this.group.removeChild(this.group.firstChild);
        }
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
            this.snotes.nviewsbox.createForm(this);
        })
    }

    initDelete() {
        let rm = document.createElement('div');
        rm.setAttribute('class', 'delete');
        rm.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
        this.group.appendChild(rm);

        rm.addEventListener('click', () => {
            this.snotes.deleteNote(this.note, this);
        })
    }
}

class NotesBoxView {
    constructor(snotes) {
        this.snotes = snotes;
        this.notes = [];

        this.initForm();
        this.initCreate();

    }

    static get CANVAS() {
        return document.getElementById('notespace');
    }

    initCreate() {
        let createButtons = document.getElementsByClassName('create');
        Array.prototype.forEach.call(createButtons, (cbut) => {
            cbut.addEventListener('click', () => {
                this.createForm();
            })
        });
    }

    initForm() {
        this.formdiv = document.createElement('div');
        this.hideForm();

        this.form = document.createElement('form');
        this.form.setAttribute('method', 'post');
        this.form.setAttribute('action', '');

        this.ttlinput = document.createElement('input');
        this.ttlinput.setAttribute('type', 'text');
        this.ttlinput.setAttribute('placeholder', 'Título');

        this.txtarea = document.createElement('textarea');
        this.txtarea.setAttribute('rows', '4');
        this.txtarea.setAttribute('cols', '40');
        this.txtarea.setAttribute('placeholder', 'Mensaje');

        this.submit = document.createElement('input');
        this.submit.setAttribute('type', 'submit');
        this.submit.setAttribute('value', 'Crear');

        this.form.appendChild(this.ttlinput);
        this.form.appendChild(this.txtarea);
        this.form.appendChild(this.submit);
        this.formdiv.appendChild(this.form);
        NotesBoxView.CANVAS.appendChild(this.formdiv);
    }

    hideForm() {
        this.formdiv.setAttribute('class', 'form hidden');
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

    createForm(noteview = undefined) {
        this.formdiv.setAttribute('class', 'form active');
        this.ttlinput.value = '';
        this.txtarea.value = '';
        if (noteview) this.createFromNView(noteview);
        else this.createFromEmpty();

    }

    createFromEmpty() {
        this.submit.setAttribute('value', 'Crear');

        //this.recreateNode(this.form, true);
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.snotes.createNote(this.ttlinput.value, this.txtarea.value);
            this.hideForm();
        });
    }

    createFromNView(noteview) {
        this.ttlinput.value = noteview.note.title;
        this.txtarea.value = noteview.note.message;
        this.submit.setAttribute('value', 'Guardar');

        //this.recreateNode(this.form, true);
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.snotes.editNote(noteview, this.ttlinput.value, this.txtarea.value);
            this.hideForm();
        });
    }

    recreateNode(el, withChildren) {
        if (withChildren) {
            el.parentNode.replaceChild(el.cloneNode(true), el);
        }
        else {
            let newEl = el.cloneNode(false);
            while (el.hasChildNodes()) newEl.appendChild(el.firstChild);
            el.parentNode.replaceChild(newEl, el);
        }
    }
}

/*==========================
    CONTROLLER
==========================*/
class StickyNotes {
    constructor() {
        this.notesbox = new NotesBox(this);
        this.nviewsbox = new NotesBoxView(this);
    }

    saveNotes() {
        localStorage.stickyNotes = JSON.stringify(this.notesbox.notes);
    }

    createNote(title = '', message = '', time = undefined, save = true) {
        let note = new Note(title, message, time);
        let nview = new NoteView(this, note);

        this.notesbox.addNote(note);
        this.nviewsbox.addNView(nview);

        this.saveNotes();
    }

    deleteNote(note, nview) {
        this.notesbox.rmNote(note);
        this.nviewsbox.rmNView(nview);

        this.saveNotes();
    }

    editNote(nview, title = '', message = '') {
        nview.note.title = title;
        nview.note.message = message;
        nview.initGroup();

        this.saveNotes();
    }

    loadStorage() {
        if (localStorage.stickyNotes)
            for (let note of JSON.parse(localStorage.stickyNotes))
                this.createNote(note._title, note._message, note._time, false);

    }
}


window.addEventListener('load', () => {
    const snotes = new StickyNotes();
    snotes.loadStorage();
});