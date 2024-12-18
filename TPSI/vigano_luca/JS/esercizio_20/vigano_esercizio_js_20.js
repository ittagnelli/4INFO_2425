function stampa(object) {
    console.log(object);
}

let macchina = function (persone, velocita, rapporto, onOff) {
    (this.persone = persone),
    (this.speed = speed),
    (this.rapp = rapp),
    (this.accspe = accspe),
    (this.impPersone = function () {
        if (speed == 0) {
            do {
                let npersone = prompt("Inserire numero di persone a bordo");
            }
            while (npersone >= 0 && npersone <= 5);
            this.persone = npersone;
        }
        else
            alert("macchina in movimento");
    }),
    (this.velocita = function () {
        if (accspe) {
            do {
                let velocita = prompt("Inserire velocita");
            }
            while (velocita >= 0 && velocita <= 180)
            this.velocita = velocita;
        }
        else
            alert("la macchina è spenta");
    }),
    (this.rapportoup = function () {
        if(accspe) {
            if (this.rapp < 6)
                this.rapp = this.rapp + 1;
        }
        else
            alert("la macchina è spenta");
    }),
    (this.rapportodown = function () {
        if(accspe) {
            if (this.rapp > 1)
                this.rapp = this.rapp - 1;
        }
        else
            alert("L'automobile è spenta");
    }),
    (this.accendispegni = function () {
        accspe = !accspe;
    });
};

let automobile1 = new macchina();

automobile1.impPersone();
automobile1.velocita();