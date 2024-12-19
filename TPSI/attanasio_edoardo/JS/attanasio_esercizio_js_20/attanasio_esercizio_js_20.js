function Auto(persone, velocita, rapporto, accesa) {
    this.persone = persone || 0;
    this.velocita = velocita || 0;
    this.rapporto = rapporto || 1;
    this.accesa = accesa || false;

    this.stato = function() {
        console.log(`Stato auto:
    Persone a bordo: ${this.persone}
    Velocità: ${this.velocita} km/h
    Rapporto: ${this.rapporto}
    Accesa: ${this.accesa ? 'Sì' : 'No'}
    
    `);
    };

    this.accendiSpegni = function() {
        this.accesa = !this.accesa;
        if (!this.accesa) this.velocita = 0;
        console.log(`Auto ${this.accesa ? 'accesa' : 'spenta'}.`);
        this.stato();
    };

    this.setPersone = function(numero) {
        if (this.velocita > 0) {
            console.log("Errore: l'auto è in movimento!");
            return;
        }
        if (numero < 0 || numero > 5) {
            console.log("Errore: numero di persone non valido!");
            return;
        }
        this.persone = numero;
        this.stato();
    };

    this.setVelocita = function(vel) {
        if (!this.accesa) {
            console.log("Errore: l'auto è spenta!");
            return;
        }
        if (vel < 0 || vel > 180) {
            console.log("Errore: velocità non valida!");
            return;
        }
        if (Math.abs(vel - this.velocita) > 30) {
            console.log("Errore: cambio di velocità troppo brusco!");
            return;
        }
        this.velocita = vel;
        this.stato();
    };

    this.cambiaRapporto = function(direzione) {
        if (!this.accesa) {
            console.log("Errore: l'auto è spenta!");
            return;
        }
        const nuovoRapporto = this.rapporto + direzione;
        if (nuovoRapporto < 1 || nuovoRapporto > 6) {
            console.log("Errore: rapporto non valido!");
            return;
        }
        this.rapporto = nuovoRapporto;
        this.stato();
    };
}

function main() {
    const auto = new Auto();

    auto.stato();
    auto.accendiSpegni();
    auto.setPersone(5);
    auto.setVelocita(10);
    auto.setVelocita(20);
    auto.setPersone(3);
    auto.setVelocita(70);

    for (let i = 0; i < 6; i++) auto.cambiaRapporto(1);
    for (let i = 0; i < 6; i++) auto.cambiaRapporto(-1);

    auto.accendiSpegni();
    auto.setPersone(0);
}

main();
