
function enumera(){
    let chiavi = Object.keys(this);
    for(let i = 0; i < chiavi.length; i++){
        console.log(chiavi[i]);
    }
} 


let Animale = {
    tipo : "cane",
    verso : "BAUH BAUH",
    razza : "dobberman",
    enumera : enumera,
    descrizione(){
        console.log(`Questo è un ${this.tipo} di razza ${this.razza}`);
    },
    suono(){
        console.log(this.verso);
    }
}

let Automobile = {
    modello: "nomeAuto",
    costo: "prezzo",
    regione: "residenza",
    enumera : enumera,
    speak() {
        console.log(`Il modello dell'auto è ${this.modello}`);
    },
    size() {
        console.log(`La residenza dell'auto è ${this.regione}`);
    }
};

let Poligono = {
    tipoPoligono: "rettangolo",
    base: 10,
    altezza: 5,
    enumera: enumera,
    calcolArea(){
        console.log(`AREA: ${(this.base * this.altezza)/2}`);
    },
    calcolaPerimetro(){
        console.log(`Perimetro: ${this.base * 2 + this.altezza * 2}`);
    }
};

Automobile.enumera();
Animale.enumera();
Poligono.enumera();