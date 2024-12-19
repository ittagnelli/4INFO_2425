function mostraMessaggio(messaggio) {
    alert(messaggio);
}

let Automobile = function (persone, velocitaAttuale, marciaCorrente, statoAccensione) {
    this.persone = persone;
    this.velocitaAttuale = velocitaAttuale;
    this.marciaCorrente = marciaCorrente;
    this.statoAccensione = statoAccensione;

    this.impostaPersone = function () {
        if (this.velocitaAttuale === 0) {
            let numeroPersone;
            do {
                numeroPersone = parseInt(prompt("Inserisci il numero di persone (tra 0 e 5):"), 10);
            } while (isNaN(numeroPersone) || numeroPersone < 0 || numeroPersone > 5);
            this.persone = numeroPersone;
        } else {
            mostraMessaggio("Non puoi cambiare il numero di persone mentre l'auto è in movimento.");
        }
    };

    this.impostaVelocita = function () {
        if (this.statoAccensione) {
            let velocitaInput;
            do {
                velocitaInput = parseInt(prompt("Imposta velocità (tra 0 e 180):"), 10);
            } while (
                isNaN(velocitaInput) ||
                velocitaInput < 0 ||
                velocitaInput > 180 ||
                Math.abs(this.velocitaAttuale - velocitaInput) > 30
            );
            this.velocitaAttuale = velocitaInput;
        } else {
            mostraMessaggio("L'auto è spenta. Accendila per impostare la velocità.");
        }
    };

    this.increaseGear = function () {
        if (this.statoAccensione) {
            if (this.marciaCorrente < 6) {
                this.marciaCorrente++;
            } else {
                mostraMessaggio("La marcia è già al massimo.");
            }
        } else {
            mostraMessaggio("L'auto è spenta.");
        }
    };

    this.decreaseGear = function () {
        if (this.statoAccensione) {
            if (this.marciaCorrente > 1) {
                this.marciaCorrente--;
            } else {
                mostraMessaggio("La marcia è già al minimo.");
            }
        } else {
            mostraMessaggio("L'auto è spenta.");
        }
    };

    this.toggleAccensione = function () {
        this.statoAccensione = !this.statoAccensione;
    };
};

let automobile1 = new Automobile(0, 0, 1, false);

automobile1.impostaPersone();
automobile1.impostaVelocita();
