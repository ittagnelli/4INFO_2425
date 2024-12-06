let Automobile = function (colore, marca, cilindrata, vetri, sedili) {
    (this.colore = colore),
    (this.marca = marca),
    (this.cilindrata = cilindrata),
    (this.vetri = vetri),
    (this.sedili = sedili),
    (this.accensione = function (){
        console.log("VROOM");
    }),
    (this.spegnimento = function (){
        console.log("MI SPENGO");
    }),
    (this.music = function (){
        console.log("riproduco musica");
    });

};

let auto1 = new Automobile("blu","Ferrari",1000,"trasparenti","pelle") 
let auto2 = new Automobile("rossa","Lamborghini",1500,"viola","seta")
let auto3 = new Automobile("nera", "Honda",800,"blu","poliestere");
let auto4 = new Automobile("viola","Fiat", 500, "scuri", "cotone")
let auto5 = new Automobile("giallo","Lancia",600, "bianchi", "lana")

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

auto1.music();
auto2.music();
auto3.music();
auto4.music();
auto5.music();