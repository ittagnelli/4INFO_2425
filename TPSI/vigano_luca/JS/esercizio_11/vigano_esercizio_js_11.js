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

let automobile1 = new automobile("rosso", "non so", "accaio", "lol", 4)
let automobile2 = new automobile("verde", "bello", "rame", "olo", 6)
let automobile3 = new automobile("blue", "scherzo", "ferro", "pip", 4)
let automobile4 = new automobile("giallo", "vero", "aria", "si", 8)
let automobile5 = new automobile("nero", "popo", "lana", "boh", 10)

automobile1.acc()
automobile1.retro()
automobile1.frena()
automobile2.acc()
automobile2.retro()
automobile2.frena()
automobile3.acc()
automobile3.retro()
automobile3.frena()
automobile4.acc()
automobile4.retro()
automobile4.frena()
automobile5.acc()
automobile5.retro()
automobile5.frena()