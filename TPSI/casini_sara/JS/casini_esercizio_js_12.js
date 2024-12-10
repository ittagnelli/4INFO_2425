const Animale = {
    tipo: "Mammifero",
    colore: "Marrone",
    peso: 15,

    speak() {
        console.log("Ciao, sono un " + this.tipo + "!");
    },
    size() {
        console.log("Il mio peso è: " + this.peso + " kg");
    },
    color() {
        console.log("Il mio colore è: " + this.colore + "!");
    },
    enumera() {
        console.log(Object.keys(this));
    }
};

const Automobile = {
    marca: "Fiat",
    modello: "500",
    velocitaMassima: 180,

    speak() {
        console.log("La marca di questa macchina è la " + this.smarca + "!");
    },
    size() {
        console.log("La mia velocità massima è: " + this.velocitaMassima + " km/h!");
    },
    model() {
        console.log("Il mio modello è: " + this.modello + "!");
    },
    enumera() {
        console.log(Object.keys(this));
    }
};

const Poligono = {
    numeroLati: 4,
    lunghezzaLato: 5,
    colore: "Blu",

    speak() {
        console.log("Il numero dei suoi lati è " + this.numeroLati + "!");
    },
    size() {
        console.log("La lunghezza di ogni lato è: " + this.lunghezzaLato + " cm!");
    },
    color() {
        console.log("Il mio colore è: " + this.colore + "!");
    },
    enumera() {
        console.log(Object.keys(this));
    }
};


console.log("Animale:");
Animale.speak();
Animale.size();
Animale.color();
Animale.enumera();

console.log("\nAutomobile:");
Automobile.speak();
Automobile.size();
Automobile.model();
Automobile.enumera();

console.log("\nPoligono:");
Poligono.speak();
Poligono.size();
Poligono.color();
Poligono.enumera();
