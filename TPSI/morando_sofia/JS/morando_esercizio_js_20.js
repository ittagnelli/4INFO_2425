class Automobile {
    constructor() {
        this.persone = 0;  
        this.velocità = 0;  
        this.rapportoVelocità = 1; 
        this.on = false;  
    }

    setPersone(persone) {
        if (this.velocità === 0) {
            this.persone = persone >= 0 && persone <= 5 ? persone : this.persone;
        } else {
            console.log("Impossibile cambiare il numero di persone mentre l'auto è in movimento.");
        }
    }

    setVelocità(velocità) {
        if (this.on && velocità >= 0 && velocità <= 180) {
            this.velocità = velocità;
        } else {
            console.log("Velocità non valida o auto spenta.");
        }
    }

    cambiaRapporto(aumenta) {
        if (this.on) {
            if (aumenta && this.rapportoVelocità < 6) {
                this.rapportoVelocità++;
            } else if (!aumenta && this.rapportoVelocità > 1) {
                this.rapportoVelocità--;
            } else {
                console.log("Impossibile cambiare rapporto.");
            }
        } else {
            console.log("Accendi l'auto per cambiare rapporto.");
        }
    }

    accendiSpegnere() {
        this.on = !this.on;
    }

    visualizzaStato() {
        console.log(`Persone: ${this.persone}, Velocità: ${this.velocità} km/h, Rapporto: ${this.rapportoVelocità}, Accesa: ${this.on ? "Sì" : "No"}`);
    }
}

function main() {
    const auto = new Automobile();

    auto.visualizzaStato(); 
    auto.accendiSpegnere(); 
    auto.visualizzaStato(); 

    auto.setPersone(3); 
    auto.setVelocità(100); 
    auto.visualizzaStato(); 

    auto.cambiaRapporto(true); 
    auto.visualizzaStato(); 

    auto.cambiaRapporto(false); 
    auto.visualizzaStato(); 

    auto.setPersone(4); 
    auto.visualizzaStato(); 

    auto.accendiSpegnere(); 
    auto.visualizzaStato(); 
}

main();
