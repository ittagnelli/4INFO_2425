document.addEventListener('DOMContentLoaded', () => {
    let form_utente = document.getElementById('registrazione');
    form_utente.addEventListener("submit", (event) => event.preventDefault());
});

const create = (obj) => { return document.createElement(obj); }
const getObjById = (id) => { return document.getElementById(id); }

const getFormValues = (form) => {
    let nome = form.querySelectorAll('input')[0].value;
    let cognome = form.querySelectorAll('input')[1].value;
    let eta = form.querySelectorAll('input')[2].value;
    let coloreCapelli = form.querySelectorAll('input')[3].value;

    return {
        nome,
        cognome,
        eta,
        coloreCapelli
    };
}

const process_form = () => {
    console.log('process form');
    const form = document.forms['registrazione'];
    let formValues = getFormValues(form);
    let dati2 = getObjById('dati2');

    console.log(formValues);

    class User {
        constructor (nome, cognome, eta, coloreCapelli) {
            this.nome = nome,
            this.cognome = cognome,
            this.eta = eta,
            this.coloreCapelli = coloreCapelli 
        };

        descrivi() {
            let p = create('p');
            let dati = getObjById('dati');
            p.innerText = `Ciao, io sono l'utente ${this.nome} ${this.cognome} di anni ${this.eta} e con i capelli color ${this.coloreCapelli}`;
            console.log(p.innerText);

            dati.appendChild(p);
        }
    }

    let utente = new User(formValues.nome, formValues.cognome, formValues.eta, formValues.coloreCapelli);
    utente.descrivi();

    delete utente.eta;
    delete utente.coloreCapelli;

    for(let key in utente) {
        console.log(`${key}: ${utente[key]}`);
        let p2 = create('p');

        p2.innerText = `${key}: ${utente[key]}`;
        dati2.appendChild(p2);
    }
}