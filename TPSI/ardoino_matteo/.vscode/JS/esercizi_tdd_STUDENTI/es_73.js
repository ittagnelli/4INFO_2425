function Submit() {
    let nome = document.getElementById("nome").value.trim();
    let cognome = document.getElementById("cognome").value.trim();
    let età = document.getElementById("età").value.trim();
    let colorecapelli = document.getElementById("colore").value.trim();
    const rifParagrafi = document.getElementById("paragrafi"); 

    if (!nome || !cognome || !età || !colorecapelli) {
        alert("Per favore, compila tutti i campi.");
        return;
    }

    class User {
        constructor(nome, cognome, età, colorecapelli) {
            this.nome = nome;
            this.cognome = cognome;
            this.età = età;
            this.colorecapelli = colorecapelli;
        }

        descrivi() {
            let p = document.createElement("p");
            p.innerText = `Nome: ${this.nome}, Cognome: ${this.cognome}, Età: ${this.età}, Colore capelli: ${this.colorecapelli}`;
            rifParagrafi.appendChild(p);
        }
    }

    let user = new User(nome, cognome, età, colorecapelli);
    user.descrivi();
}