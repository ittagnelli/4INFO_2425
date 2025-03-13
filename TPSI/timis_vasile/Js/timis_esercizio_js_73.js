document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let cognome = document.getElementById('cognome').value;
    let eta = document.getElementById('eta').value;
    let colorecapelli = document.getElementById('coloreCapelli').value;

    class User {
        constructor(nome, cognome, eta, colorecapelli) {
            this.nome = nome;
            this.cognome = cognome;
            this.eta = eta;
            this.colorecapelli = colorecapelli;
        }

        descrivi() {
            let p = document.createElement("p");
            p.innerText = "Nome: ${this.nome}, Cognome: ${this.cognome}, Età: ${this.eta}, Colore capelli: ${this.colorecapelli}";
            document.getElementById('FORM').appendChild(p);
        }
    }

    let user = new User(nome, cognome, eta, colorecapelli);
    user.descrivi();

    delete user.eta;
    delete user.colorecapelli;

    document.getElementById('FORM').textContent = `${user.nome} ${user.cognome}`;
});
