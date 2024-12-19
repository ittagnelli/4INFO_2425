function stampa(obj) {
    console.log(obj);
}

let Veicolo = function (occupanti, velocitaCorrente, marcia, acceso) {
    this.occupanti = occupanti;
    this.velocitaCorrente = velocitaCorrente;
    this.marcia = marcia;
    this.acceso = acceso;

    this.setOccupanti = function (numeroOccupanti) {
        if (this.velocitaCorrente === 0) {
            if (numeroOccupanti >= 0 && numeroOccupanti <= 5) {
                this.occupanti = numeroOccupanti;
                console.log(`Numero di occupanti aggiornato a: ${this.occupanti}`);
            } else {
                console.log("Numero di occupanti non valido.");
            }
        } else {
            console.log("Impossibile cambiare il numero di occupanti mentre il veicolo è in movimento.");
        }
    };

    this.setVelocita = function (velocita) {
        if (this.acceso) {
            if (velocita >= 0 && velocita <= 180) {
                this.velocitaCorrente = velocita;
                console.log(`Velocità aggiornata a: ${this.velocitaCorrente} km/h`);
            } else {
                console.log("Velocità non valida.");
            }
        } else {
            console.log("Accendi il veicolo per impostare la velocità.");
        }
    };

    this.aumentaMarcia = function () {
        if (this.acceso && this.marcia < 6) {
            this.marcia++;
            console.log(`Marcia aumentata a: ${this.marcia}`);
        } else {
            console.log(this.acceso ? "Marcia già al massimo." : "Accendi il veicolo.");
        }
    };

    this.diminuisciMarcia = function () {
        if (this.acceso && this.marcia > 1) {
            this.marcia--;
            console.log(`Marcia diminuita a: ${this.marcia}`);
        } else {
            console.log(this.acceso ? "Marcia già al minimo." : "Accendi il veicolo.");
        }
    };

    this.toggleAccensione = function () {
        this.acceso = !this.acceso;
        console.log(this.acceso ? "Il veicolo è acceso." : "Il veicolo è spento.");
    };
};

let veicolo1 = new Veicolo(0, 0, 1, false);

veicolo1.toggleAccensione();

veicolo1.setOccupanti(3);

veicolo1.setVelocita(60);

veicolo1.aumentaMarcia();

veicolo1.diminuisciMarcia();
