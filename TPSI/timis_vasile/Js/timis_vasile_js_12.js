const Rettile = {
    tipo: "Rettile",
    colore: "Rosso",
    peso: 67,
    
    speak() {
        console.log("Sono un" + this.tipo + "!");
    },
    size() {
        console.log("Peso è: " + this.peso + " kg");
    },
    color() {
        console.log("Clore è: " + this.colore + "!");
    },
    enumera() {
        console.log(Object.keys(this));
    }
};

const Veicolo = {
    marca: "Fiat",
    modello: "500",
    velocitaMassima: 180,
    
    speak() {
        console.log("La marca del veicolo è" + this.smarca + "!");
    },
    size() {
        console.log("La velocità max è: " + this.velocitaMassima + " km/h!");
    },
    model() {
        console.log("Il modello è: " + this.modello + "!");
    },
    enumera() {
        console.log(Object.keys(this));
    }
};

const Gono = {
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

console.log("Gono:");
Poligono.speak();
Poligono.size();
Poligono.color();
Poligono.enumera();


console.log("Veicolo:");
Automobile.speak();
Automobile.size();
Automobile.model();
Automobile.enumera();







console.log("Rettile:");
Animale.speak();
Animale.size();
Animale.color();
Animale.enumera();

