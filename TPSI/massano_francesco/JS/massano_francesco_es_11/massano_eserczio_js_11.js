let automobile = function(marca, modello, anno, colore, cavalli) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.colore = colore;
    this.cavalli = cavalli;

    this.accensione = function() {
        console.log(`Accensione di ${this.marca} ${this.modello}`);
    };
    
    this.spegnimento = function() {
        console.log(`Spegnimento di ${this.marca} ${this.modello}`);
    };

    this.mostraCavalli = function() {
        console.log(`La ${this.marca} ${this.modello} ha ${this.cavalli} cavalli`);
    };
};
let automobile1 = new automobile("Ferrari", "Sportiva", "2020", "Rosso", 150);
automobile1.accensione();
automobile1.spegnimento();
automobile1.mostraCavalli();

let automobile2 = new automobile("BMW", "Vintage", "2004", "Blu", 100);
automobile2.accensione();
automobile2.spegnimento();
automobile2.mostraCavalli();

let automobile3 = new automobile("Audi", "Sportiva", "2024", "Nera", 200);
automobile3.accensione();
automobile3.spegnimento();
automobile3.mostraCavalli();

let automobile4 = new automobile("Porsche", "Sportiva", "2023", "Bianca", 250);
automobile4.accensione();
automobile4.spegnimento();
automobile4.mostraCavalli();

let automobile5 = new automobile("Volkswagen", "Golf", "2019", "Verde", 147);
automobile5.accensione();
automobile5.spegnimento();
automobile5.mostraCavalli();
