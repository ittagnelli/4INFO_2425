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

    class User {
        constructor(nome, cognome, eta, coloreCapelli){
            this.nome = nome
            this.cognome = cognome
            this.eta = eta
            this.coloreCapelli = coloreCapelli
        }
    }
}