let Automobile = function(marchio, modello, cavalli) {
    (this.marchio = marchio),
    (this.modello = modello),
    (this.cavalli = cavalli),
    (this.enumera = () => {
       console.log(`Marchio: ${marchio}, modello: ${modello}, cavalli: ${cavalli}`); 
    }),

    (this.accensione = () => {
        console.log("L'automobile è accesa.");
    }),

    (this.spegnimento = () => {
        console.log("L'automobile è spenta.");
    });
}

let Animale = function(razza, habitat, dieta) {
    (this.razza = razza),
    (this.habitat = habitat),
    (this.dieta = dieta),

    (this.enumera = () => {
        console.log(`Razza: ${razza}, habitat: ${habitat}, dieta: ${dieta}`);
    }),

    (this.sleep = () => {
        console.log("L'animale sta dormendo");
    }),

    (this.mangia = () => {
        console.log("L'animale sta mangiando");
    });
}

let Poligono = function(lati, area, perimetro) {
    (this.lati = lati),
    (this.area = area),
    (this.perimetro = perimetro),

    (this.enumera = () => {
        console.log(`Lati: ${lati}, Area; ${area}, Perimetro: ${perimetro}`);
    }),

    (this.type = () => {
        let poligoni = {
            triangolo: 3,
            quadrilatero: 4,
            pentagono: 5,
            esagono: 6,
            ettagono: 7,
            ottagono: 8,
            ennagono: 9,
            decagono: 10
        }

        for(key in poligoni) {
            if (lati == poligoni[key]) {
                console.log(`Il poligono è un ${key}`);
            }
        }
    }),

    (this.perimetro = () => {
        console.log(`perimetro: ${perimetro}`);
    });
}

let panda = new Automobile('FIAT', 'panda', '60');
panda.enumera();
panda.accensione();
let charger = new Automobile('Dodge', 'charger', '800');
charger.enumera();
charger.spegnimento();

let gatto = new Animale('siamese', 'boschi', 'carnivoro');
gatto.enumera();
gatto.sleep();
let cane = new Animale('Border collie', 'luoghi domestici', 'carnivoro');
cane.enumera();
cane.mangia();

let quadrato1 = new Poligono(4, 16, 16);
quadrato1.enumera();
quadrato1.type();

let quadrato2 = new Poligono(4, 16, 16);
quadrato2.enumera();
quadrato2.perimetro();