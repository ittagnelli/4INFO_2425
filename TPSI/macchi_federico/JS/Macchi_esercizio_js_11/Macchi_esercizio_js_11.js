
let Automobile = function (marca, modello, cavalli, anno, colore) {
    (this.marca = marca),
    (this.modello = modello),
    (this.cavalli = cavalli),
    (this.anno = anno),
    (this.colore = colore),

    (this.accensione = function () {
      console.log(`acccensione`);
    });

    (this.spegnimento = function () {
        console.log(`spegnimento`);
    });

    (this.retro = function () {
        console.log(`retro`);
      });

};

let auto1 = new Automobile("marca 1", "modello 1", "cavalli 1", "anno 1", "colore 1");
let auto2 = new Automobile("marca 2", "modello 2", "cavalli 2", "anno 2", "colore 2");
let auto3 = new Automobile("marca 3", "modello 3", "cavalli 3", "anno 3", "colore 3");
let auto4 = new Automobile("marca 4", "modello 4", "cavalli 4", "anno 4", "colore 4");
let auto5 = new Automobile("marca 5", "modello 5", "cavalli 5", "anno 5", "colore 5");


auto1.accensione();
auto2.accensione();
auto3.accensione();
auto4.accensione();
auto5.accensione();

auto1.spegnimento();
auto2.spegnimento();
auto3.spegnimento();
auto4.spegnimento();
auto5.spegnimento();

auto1.retro();
auto2.retro();
auto3.retro();
auto4.retro();
auto5.retro();
Footer
