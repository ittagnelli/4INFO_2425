let automobile = function (colore, modelli, materiale, marca, ruote) {
    (this.colore = colore),
      (this.modelli = modelli),
      (this.materiale = materiale),
      (this.marca = marca),
      (this.ruote = ruote),
      (this.retro = function retromarcia() {
        console.log(`andando in dietro con ${this.modelli} e con ${this.ruote}`);
      });
      (this.acc = function accellerare() {
        console.log(`Accc con ${this.modelli} e con ${this.ruote}`);
      });
      (this.frena = function frenare() {
        console.log(`frenando con ${this.modelli} e con ${this.ruote}`);
      });
  };

let automobile1 = new automobile("fucsia", "bu", "accaio", "lol", 4)
let automobile2 = new automobile("rosa", "cista", "rame", "olo", 6)
let automobile3 = new automobile("viola", "prank", "ferro", "pip", 4)
let automobile4 = new automobile("arancione", "vero", "aria", "si", 8)
let automobile5 = new automobile("nero", "bello", "lana", "boh", 10)

automobile1.acc()
automobile2.retro()
automobile3.frena()
automobile4.retro()
automobile5.acc()
