class RegForm {
    constructor() {
        this.users = [];
        this.xhttp = new XMLHttpRequest();
        this.errorBox = document.getElementById('error');

        let classThis = this;
        this.xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                classThis.loadUsers(this.responseText);
            }
        };

        this.updateUsers = setInterval(() => {
            this.getUsers();
        }, 1000);

        this.getUsers();
        this.initListeners();
    }

    initListeners() {
        let input = document.getElementById('username');
        if (input) {
            input.addEventListener('keyup', (event) => {
                if (this.users.includes(event.target.value)) {
                    this.errorBox.innerHTML = 'El usuario ya existe!!';
                    this.errorBox.innerHTML += '<br/>Prueba con ' + event.target.value + '_' + (Math.floor(100 * Math.random()) + 1);
                } else {
                    this.errorBox.innerHTML = '';
                }
            });
        }
    }

    getUsers() {
        this.xhttp.open("GET", "users.json", true);
        this.xhttp.send();
    };

    loadUsers(jsonString) {
        this.mails = [];
        let jsonObj = JSON.parse(jsonString);
        if (jsonObj.hasOwnProperty('users')) {
            jsonObj['users'].forEach((elem) => {
                this.users.push(elem['username']);
            });
        }
    };
}


window.addEventListener("load", () => {
    let regform = new RegForm();
});