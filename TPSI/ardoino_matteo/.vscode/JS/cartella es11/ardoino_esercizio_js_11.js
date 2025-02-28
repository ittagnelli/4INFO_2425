const Automobile = {
    marca: 'Fiat',
    modello: 'Panda',
    anno: 2020,
    colore: 'Blu',
    chilometraggio: 15000,

    accendi: function() {
        console.log(`L'automobile ${this.marca} ${this.modello} è accesa.`);
    },

    spegni: function() {
        console.log(`L'automobile ${this.marca} ${this.modello} è spenta.`);
    },

    aggiornaChilometraggio: function(nuovoChilometraggio) {
        this.chilometraggio = nuovoChilometraggio;
        console.log(`Chilometraggio aggiornato a ${this.chilometraggio} km.`);
    }
};

Automobile.accendi();
Automobile.aggiornaChilometraggio(20000); 
Automobile.spegni();