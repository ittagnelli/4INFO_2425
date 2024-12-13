function stampa(object) {
    alert(object);
}

let Automobile = function (persone, velocita, rapporto, onOff) {
    (this.persone = persone),
    (this.velocita = velocita),
    (this.rapporto = rapporto),
    (this.onOff = onOff),
    (this.impostaPersone = function () {
        if (velocita == 0) {
            do {
                let personeInput = prompt("Inserire numero di persone a bordo");
            }
            while (personeInput >= 0 && personeInput <= 5);
            this.persone = personeInput;
        }
        else
            alert("Velocità troppo alta");
    }),
    (this.impostaVelocita = function () {
        if (onOff) {
            do {
                let velocitaInput = prompt("Inserire velocita");
            }
            while ((velocitaInput >= 0 && velocitaInput <= 180) && (velocita > velocitaInput ? velocita - velocitaInput : velocitaInput - velocita) <= 30);
            this.velocita = velocitaInput;
        }
        else
            alert("L'automobile è spenta");
    }),
    (this.aumentaRapporto = function () {
        if(onOff) {
            if (this.rapporto < 6)
                this.rapporto++;
        }
        else
            alert("L'automobile è spenta");
    }),
    (this.diminuisciRapporto = function () {
        if(onOff) {
            if (this.rapporto > 1)
                this.rapporto--;
        }
        else
            alert("L'automobile è spenta");
    }),
    (this.accendiSpegni = function () {
        onOff = !onOff;
    });
};

let automobile1 = new Automobile();

automobile1.impostaPersone();
automobile1.impostaVelocita();