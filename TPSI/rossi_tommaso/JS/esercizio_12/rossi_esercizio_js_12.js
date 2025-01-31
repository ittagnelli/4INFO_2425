let enumera = function(object) {
    console.log(Object.keys(object));
};

let Animale = function(nome, specie, habitat) {
    (this.nome = nome),
    (this.specie = specie),
    (this.habitat = habitat),
    (this.info = function() {
        console.log(`Animale: ${this.nome}, Specie: ${this.specie}`);
    }),
    (this.ambiente = function() {
        console.log(`Habitat dove vive questo animale: ${this.habitat}`);
    }),
    (this.enumera = enumera);
};

let Automobile = function(marca, modello, prezzo) {
    (this.marca = marca),
    (this.modello = modello),
    (this.prezzo = prezzo),
    (this.info = function() {
        console.log(`Marca: ${this.marca}, Modello: ${this.modello}`);
    }),
    (this.costo = function() {
        console.log(`Prezzo dell'automobile: ${this.prezzo}`);
    }),
    (this.enumera = enumera);
};

let Poligono = function(lati, diagonali, angoliRetti) {
    (this.lati = lati),
    (this.diagonali = diagonali),
    (this.angoliRetti = angoliRetti),
    (this.poligono = function() {
        let poligono;
        switch(lati) {
            case 3:
            poligono = "triangolo";
            break;
            case 4:
            poligono = "quadrato";
            break;
            case 5:
            poligono = "pentagono";
            break;
            case 6:
            poligono = "esagono";
            break;
            case 7:
            poligono = "ettagono";
            break;
            case 8:
            poligono = "ottagono";
            break;
            case 9:
            poligono = "ennagono";
            break;
            case 10:
            poligono = "decagono";
            break;
            default:
            console.log("Il poligono ha più di dieci lati");

            console.log(`Il poligono ha ${this.lati} lati ed è quindi un ${poligono}`);
        };
    }),
    (this.info = function() {
        console.log(`Il poligono ha ${this.diagonali} diagonali e ${this.angoliRetti} angoli retti`);
    }),
    (this.enumera = enumera);
};

let animale1 = new Animale("panda", "mammifero", "foresta");
let animale2 = new Animale("leone", "mammifero", "savana");

let automobile1 = new Automobile("fiat", "panda", "10000");
let automobile2 = new Automobile("peugeot", "208", "20000");

let poligono1 = new Poligono(4, 2, 4);
let poligono2 = new Poligono(8, 20, 0);

animale1.enumera(animale1);
animale2.enumera(animale2);

automobile1.enumera(automobile1);
automobile2.enumera(automobile2);

poligono1.enumera(poligono1);
poligono2.enumera(poligono2);