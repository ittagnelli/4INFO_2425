document.addEventListener("DOMContentLoaded", function() {
    let form_utente = document.getElementById("registrationForm");

    form_utente.addEventListener("submit", function(event) {
        event.preventDefault();
    });
});

function process_form() {
    console.log("process form");

    let form = document.forms["registrationForm"];
    let User = {
        nome: form.elements["nome"].value,
        cognome: form.elements["cognome"].value,
        eta: form.elements["eta"].value,
        coloreCapelli: form.elements["coloreCapelli"].value,
        descrivi: function() {
            return `Ciao, io sono l'utente ${this.nome} ${this.cognome} di anni ${this.eta} e con i capelli color ${this.coloreCapelli}`;
        }
    };

    for (let key in User) {
        if (User.hasOwnProperty(key) && key !== 'descrivi') {
            let p = document.createElement('p');
            p.textContent = `${key}: ${User[key]}`;
            document.body.appendChild(p);
        }
    }

    console.log(User.descrivi());

    delete User.eta;
    delete User.coloreCapelli;

    for (let key in User) {
        if (User.hasOwnProperty(key) && key !== 'descrivi') {
            let p = document.createElement('p');
            p.textContent = `${key}: ${User[key]}`;
            document.body.appendChild(p);
        }
    }
}