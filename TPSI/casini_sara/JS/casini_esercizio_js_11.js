let automobile = function (colore, nomeAuto, materiale, marca, cilindrata) {
          (this.colore = colore),
          (this.modelli = nomeAuto),
          (this.materiale = materiale),
          (this.marca = marca),
          (this.cilindrata = cilindrata),
          (this.retro = function retromarcia() {
            console.log(`andando in dietro con ${this.modelli} e con ${this.cilindrata}`);
          });
          (this.acc = function accellerare() {
            console.log(`Accc con ${this.modelli} e con ${this.cilindrata}`);
          });
          (this.frena = function frenare() {
            console.log(`frenando con ${this.modelli} e con ${this.cilindrata}`);
          });
      };
    
    let automobile1 = new automobile("rosso", "audi", "accaio", "bello", 4)
    let automobile2 = new automobile("grigio", "ford", "rame", "olo", 6)
    let automobile3 = new automobile("blue", "audi", "ferro", "pip", 4)
    let automobile4 = new automobile("bianco", "bmw", "aria", "si", 8)
    let automobile5 = new automobile("nero", "moto", "lana", "no", 10)
    
    automobile1.acc()
    automobile2.retro()
    automobile3.frena()
    automobile4.retro()
    automobile5.acc()
