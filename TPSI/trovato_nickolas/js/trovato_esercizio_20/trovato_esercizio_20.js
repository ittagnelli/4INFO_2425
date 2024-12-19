class Automobile {
    constructor() {
        this.personeABordo = 0;
        this.velocita = 0;
        this.rapportoVelocita = 1;
        this.accensione = false;
    }

    accendiSpegni() {
        this.accensione = !this.accensione;
        console.log(`Automobile ${this.accensione ? "accesa" : "spenta"}.`);
    }

    setPersoneABordo(numero) {
        if (this.velocita > 0) {
            console.log("Impossibile modificare le persone a bordo mentre l'auto è in movimento.");
        } else if (numero >= 0 && numero <= 5) {
            this.personeABordo = numero;
            console.log(`Persone a bordo: ${this.personeABordo}`);
        } else {
            console.log("Errore: Numero non valido di persone (valore ammesso tra 0 e 5).");
        }
    }

    setVelocita(nuovaVelocita) {
        const limiteInferiore = this.velocita - 30;
        const limiteSuperiore = this.velocita + 30;

        if (nuovaVelocita >= 0 && nuovaVelocita <= 180) {
            if (nuovaVelocita >= limiteInferiore && nuovaVelocita <= limiteSuperiore) {
                this.velocita = nuovaVelocita;
                console.log(`Velocità impostata a: ${this.velocita} km/h`);
            } else {
                console.log(`Errore: La velocità può variare solo di ±30 km/h. Velocità attuale: ${this.velocita}`);
            }
        } else {
            console.log("Errore: La velocità deve essere compresa tra 0 e 180 km/h.");
        }
    }

    aumentaRapporto() {
        if (this.rapportoVelocita < 6) {
            this.rapportoVelocita++;
            console.log(`Rapporto di velocità aumentato a: ${this.rapportoVelocita}`);
        } else {
            console.log("Errore: Rapporto di velocità massimo raggiunto.");
        }
    }

    diminuisciRapporto() {
        if (this.rapportoVelocita > 1) {
            this.rapportoVelocita--;
            console.log(`Rapporto di velocità diminuito a: ${this.rapportoVelocita}`);
        } else {
            console.log("Errore: Rapporto di velocità minimo raggiunto.");
        }
    }
}

const auto = new Automobile();

auto.accendiSpegni();
auto.setPersoneABordo(3);
auto.setVelocita(50);
auto.aumentaRapporto();
auto.diminuisciRapporto();
auto.setVelocita(80);
auto.accendiSpegni();
