let Automobile = function(nome, colore, anno, residenza, targa){
    (this.modello = nome),
    (this.colore = colore),
    (this.anno = anno),
    (this.residenza = residenza),
    (this.targa = targa),
    (this.name = function () {
      console.log(`Il modello di quest'auto è ${this.modello}`);
    });
    (this.colour = function () {
        console.log(`Il colore di quest'auto è ${this.colore}`);
    });
    (this.year = function () {
        console.log(`L'anno di quest'auto è ${this.anno}`);
    });
}

let macchina1 = new Automobile('BMW1', 'Rosso', 2015, 'Roma', '123456');
let macchina2 = new Automobile('BMW2', 'Gialla', 2014, 'Torino', '123456');
let macchina3 = new Automobile('BmW3', 'Blu', 2013, 'Milano', '123456');
let macchina4 = new Automobile('BMW4', 'Verde', 2012, 'Napoli', '123456');
let macchina5 = new Automobile('BMW5', 'Nera', 2011, 'Firenze', '123456');

macchina1.name();
macchina1.colour();
macchina1.year();

macchina2.name();
macchina2.colour();
macchina2.year();

macchina3.name();
macchina3.colour();
macchina3.year();