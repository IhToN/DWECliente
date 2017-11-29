class Mail {
    constructor(mail = '', name = '', date = '', subject = '', message = '') {
        this.mail = mail;
        this.name = name;
        this.date = date;
        this.subject = subject;
        this.message = message;
    }
}

class Mails {
    constructor() {
        this.xhttp = new XMLHttpRequest();

        let classThis = this;
        this.xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                classThis.loadMails(this.responseText);
            }
        };

        this.updateMail = setInterval(() => {
            this.getMails();
        }, 1000);

        this.initTable();
        this.getMails();
    }

    initTable() {
        this.mailBox = document.getElementById('mailbox');
        while (this.mailBox.firstChild) {
            this.mailBox.removeChild(this.mailBox.firstChild);
        }
        this.table = document.createElement('table');
        this.table.setAttribute('class', 'responstable');
        if (this.mailBox) {
            let trHead = document.createElement('tr');

            let thMail = document.createElement('th');
            thMail.innerHTML = 'Email';

            let thName = document.createElement('th');
            thName.innerHTML = 'Name';

            let thDate = document.createElement('th');
            thDate.innerHTML = 'Date';

            let thSubject = document.createElement('th');
            thSubject.innerHTML = 'Subject';

            let thMessage = document.createElement('th');
            thMessage.innerHTML = 'Message';

            trHead.appendChild(thMail);
            trHead.appendChild(thName);
            trHead.appendChild(thDate);
            trHead.appendChild(thSubject);
            trHead.appendChild(thMessage);

            this.table.appendChild(trHead);
            this.mailBox.appendChild(this.table);
        }
    }

    getMails() {
        this.xhttp.open("GET", "emails.json", true);
        this.xhttp.send();
    };

    loadMails(jsonString) {
        this.mails = [];
        let jsonObj = JSON.parse(jsonString);
        if (jsonObj.hasOwnProperty('emails')) {
            jsonObj['emails'].forEach((elem) => {
                this.mails.push(new Mail(elem['mail'], elem['name'], elem['date'], elem['subject'], elem['message']));
            });
        }
        this.printMails();
    };

    printMails() {
        if (this.mailBox) {
            this.initTable();
            this.mails.forEach((elem) => {
                let trElem = document.createElement('tr');

                let thMail = document.createElement('td');
                thMail.innerHTML = elem.mail;

                let thName = document.createElement('td');
                thName.innerHTML = elem.name;

                let thDate = document.createElement('td');
                thDate.innerHTML = elem.date;

                let thSubject = document.createElement('td');
                thSubject.innerHTML = elem.subject;

                let thMessage = document.createElement('td');
                thMessage.innerHTML = elem.message;

                trElem.appendChild(thMail);
                trElem.appendChild(thName);
                trElem.appendChild(thDate);
                trElem.appendChild(thSubject);
                trElem.appendChild(thMessage);

                this.table.appendChild(trElem);
            });
        }
    }
}

window.addEventListener("load", () => {
    let mails = new Mails();
});