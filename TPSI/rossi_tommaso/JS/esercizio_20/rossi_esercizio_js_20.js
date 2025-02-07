function stampa(obj) {
    alert(obj);
}

let Veicolo = function (occupanti, velocitaCorrente, marcia, acceso) {
    this.occupanti = occupanti;
    this.velocitaCorrente = velocitaCorrente;
    this.marcia = marcia;
    this.acceso = acceso;

    this.setOccupanti = function () {
        if (this.velocitaCorrente === 0) {
            let occupantiInput;
            do {
                occupantiInput = parseInt(prompt("Inserire il numero di occupanti (tra 0 e 5):"), 10);
            } while (isNaN(occupantiInput) || occupantiInput < 0 || occupantiInput > 5);
            this.occupanti = occupantiInput;
        } else {
            alert("Impossibile cambiare il numero di occupanti mentre il veicolo è in movimento.");
        }
    };

    this.setVelocita = function () {
        if (this.acceso) {
            let velocitaInput;
            do {
                velocitaInput = parseInt(prompt("Inserire velocità (tra 0 e 180):"), 10);
            } while (
                isNaN(velocitaInput) ||
                velocitaInput < 0 ||
                velocitaInput > 180 ||
                Math.abs(this.velocitaCorrente - velocitaInput) > 30
            );
            this.velocitaCorrente = velocitaInput;
        } else {
            alert("Il veicolo è spento. Accendilo per impostare la velocità.");
        }
    };

    this.aumentaMarcia = function () {
        if (this.acceso) {
            if (this.marcia < 6) {
                this.marcia++;
            } else {
                alert("La marcia è già al massimo.");
            }
        } else {
            alert("Il veicolo è spento.");
        }
    };

    this.diminuisciMarcia = function () {
        if (this.acceso) {
            if (this.marcia > 1) {
                this.marcia--;
            } else {
                alert("La marcia è già al minimo.");
            }
        } else {
            alert("Il veicolo è spento.");
        }
    };

    this.toggleAccensione = function () {
        this.acceso = !this.acceso;
    };
};

let veicolo1 = new Veicolo(0, 0, 1, false);

veicolo1.setOccupanti();
veicolo1.setVelocita();
