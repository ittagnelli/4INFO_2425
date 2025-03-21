document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById('registrazione');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
    });
});

function createElementsP() {
    return document.createElement('p');
}

function getById(id) {
    return document.getElementById(id);
}

function show_data() {
    const form = document.forms['registrazione'];
    let form_keys = ['nome','cognome','eta','capelli']
    let form_values = new Array(0)

    for(const key of form_keys){
        form_values.push(form.elements[key].value)
    }

    let [nome ,cognome, eta, coloreCapelli] = form_values;

    class User {
        constructor(nome, cognome, eta, coloreCapelli){
            // [this.nome, this.cognome, this.eta, this.coloreCapelli] = nome, cognome, eta, coloreCapelli;
            this.nome = nome;
            this.cognome = cognome;
            this.eta = eta;
            this.coloreCapelli;
        }

        descrivi() {
            let p = createElementsP();
            let dati = getById('dati');

            p.innerText = `Ciao, io sono l'utente ${this.nome} ${this.cognome}, ho ${this.eta} anni e i miei capelli sono ${this.coloreCapelli}`;
            console.log(`Ciao, io sono l'utente ${this.nome} ${this.cognome}, ho ${this.eta} anni e i miei capelli sono ${this.coloreCapelli}`)

            dati.appendChild(p)
        }
    }

    let utente = new User(nome, cognome, eta, coloreCapelli);
    utente.descrivi();

    delete utente.eta
    delete utente.coloreCapelli    

    let dati2 = getById('dati2');     

    for(let chiave in utente){
        console.log(`${chiave}: ${utente[chiave]}`)
        let p2 = createElementsP();
        p2.innerText = `${chiave}: ${utente[chiave]}`;

        dati2.appendChild(p2);        
    }
}