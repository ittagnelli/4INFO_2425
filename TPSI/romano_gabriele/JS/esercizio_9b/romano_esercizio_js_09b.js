let Automobile = function(marca, modello, km, anno, prezzo) {
    (this.marca = marca),
    (this.modello = modello),
    (this.km = km),
    (this.anno = anno),
    (this.prezzo = prezzo),
    (this.info = function() {
        console.log(`Ecco le info dell'auto: ${this.marca}, ${this.modello}, ${this.km}, ${this.anno}`);
    }),
    (this.costo = function() {
        console.log(`Il prezzo finale è di ${this.prezzo} euro`);
    }),
    (this.disponibile = function() {
        console.log(`L'automobile è disponibile per il ritiro in concessionario`);
    });
};

let automobile1 = new Automobile("ferrari", "f40", "100000", "1995", "10");
let automobile2 = new Automobile("lamborghini", "huracan", "80000", "2012", "5");
let automobile3 = new Automobile("ford", "fiesta", "50000", "2003", "2.5");
let automobile4 = new Automobile("fiat", "topolino", "50", "2024", "1.25");
let automobile5 = new Automobile("toyota", "auris", "20", "2018", "0.625");

automobile1.info();
automobile1.costo();
automobile1.disponibile();

automobile2.info();
automobile2.costo();
automobile2.disponibile();

automobile3.info();
automobile3.costo();
automobile3.disponibile();

automobile4.info();
automobile4.costo();
automobile4.disponibile();

automobile5.info();
automobile5.costo();
automobile5.disponibile();