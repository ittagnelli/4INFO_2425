export class Automobile {
    constructor(brand, model, year, color, cc){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.cc = cc;
    }

    accensione(){
        console.log('accesa');
    }

    spegnimento(){
        console.log('spenta');
    }

    caratteristiche() {
        console.log(`brand: ${this.brand} modello: ${this.model} anno: ${this.year} colore: ${this.color} cc: ${this.cc}`)
    }
}
