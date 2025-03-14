document.addEventListener("DOMContentLoaded", function() {
    // ricata l'oggetto DOM del form
    let form_utente = document.getElementById('registrazione');

    //aggiunge un handler all'evento submit del form
    //in modo da inibire il normale funzionamento (invio del form verso il server)
    form_utente.addEventListener("submit", function(event) {
        event.preventDefault();
    });
});

function process_form(){
    console.log("process form");
    form = document.forms['registrazione'];
    console.log(form.elements['nome'].value);
    console.log(form.elements['cognome'].value);
    console.log(form.elements['eta'].value);
    console.log(form.elements['capelli'].value);

    let nome = form.elements['nome'].value
    let cognome = form.elements['cognome'].value
    let eta = form.elements['eta'].value
    let coloreCapelli = form.elements['capelli'].value


    class User {
        constructor(nome, cognome, eta, coloreCapelli){
            this.nome = nome
            this.cognome = cognome
            this.eta = eta
            this.coloreCapelli = coloreCapelli
        }

        descrivi() {
            let p = document.createElement('p');
            let dati = document.getElementById('dati');
            dati.innerText = '';
            p.innerText = `Ciao, io sono l'utente ${this.nome} ${this.cognome}, ho ${this.eta} anni e i miei capelli sono ${this.coloreCapelli}`
            dati.appendChild(p)
            console.log(`Ciao, io sono l'utente ${this.nome} ${this.cognome}, ho ${this.eta} anni e i miei capelli sono ${this.coloreCapelli}`)
        }
    }

    let utente = new User(nome, cognome, eta, coloreCapelli);
    utente.descrivi();

    delete utente.eta
    delete utente.coloreCapelli    
    
    let dati2 = document.getElementById('dati2');     

    for(let chiave in utente){
        console.log(`${chiave}: ${utente[chiave]}`)
        let p2 = document.createElement('p');
        p2.innerText = `${chiave}: ${utente[chiave]}`;

        dati2.appendChild(p2);        
    }    
}