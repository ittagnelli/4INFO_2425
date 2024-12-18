class Automobile {
    constructor() {
        this.personeABordo = 0; 
        this.velocita = 0; 
        this.rapportoVelocita = 1; 
        this.onOff = false; 
    }
    toggleAccensione() {
        this.onOff = !this.onOff;
        console.log(`L'auto è ora ${this.onOff ? "accesa" : "spenta"}.`);
    }
    setPersoneABordo(numero) {
        if (numero >= 0 && numero <= 5) {
            this.personeABordo = numero;
            console.log(`Persone a bordo impostate a: ${this.personeABordo}`);
        } else {
            console.log("Numero di persone a bordo non valido. Deve essere compreso tra 0 e 5.");
        }
    }
    setVelocita(velocita) {
        if (velocita >= 0 && velocita <= 180) {
            this.velocita = velocita;
            console.log(`Velocità impostata a: ${this.velocita} km/h`);
        } else {
            console.log("Velocità non valida. Deve essere compresa tra 0 e 180 km/h.");
        }
    }
    aumentaRapportoVelocita() {
        if (this.rapportoVelocita < 6) {
            this.rapportoVelocita++;
            console.log(`Marcia aumentata. Rapporto di velocità attuale: ${this.rapportoVelocita}`);
        } else {
            console.log("Sei già alla marcia massima (6).");
        }
    }
    diminuisciRapportoVelocita() {
        if (this.rapportoVelocita > 1) {
            this.rapportoVelocita--;
            console.log(`Marcia diminuita. Rapporto di velocità attuale: ${this.rapportoVelocita}`);
        } else {
            console.log("Sei già alla marcia minima (1).");
        }
    }
}
function main() {
    const auto = new Automobile();

    auto.toggleAccensione();
    auto.setPersoneABordo(4);
    auto.setVelocita(100);

    auto.aumentaRapportoVelocita(); 
    auto.aumentaRapportoVelocita(); 
    auto.diminuisciRapportoVelocita(); 
    auto.setPersoneABordo(6); 
    auto.setVelocita(200); 
    auto.diminuisciRapportoVelocita(); 
    auto.diminuisciRapportoVelocita(); 
    auto.toggleAccensione();
}

main();
