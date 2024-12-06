let automobile = function (modello, marca, cilindrata, cambio, motore) {
    (this.modello = modello),
      (this.marca = marca),
      (this.cilindrata = cilindrata),
      (this.cambio = cambio),
      (this.motore = motore),
      (this.modello_marca = function () {
        console.log(`Ecco l'automobile ${this.modello} ${this.marca}`);
      });
      (this.cilindrata_motore = function () {
        console.log(`L'automobile ha una cilindrata di ${this.cilindrata} e un motore di ${this.motore}`);
      });
      (this.cambio_olio = function () {
        console.log(`L'automobile ha bisogno di un cambio olio ogni ${this.cambio}, anni`);
      });
      
  };


  let automobile1 = new automobile("Z1", "Ferrari", "8000", "8", "V8");
  let automobile2 = new automobile("camaro", "mustang", "8000", "8", "V8");
  let automobile3 = new automobile("Z1", "Ferrari", "8000", "8", "V8");


  automobile1.modello_marca()
  automobile1.cilindrata_motore()
  automobile1.cambio_olio()


  automobile2.modello_marca()
  automobile2.cilindrata_motore()
  automobile2.cambio_olio()


  automobile3.modello_marca()
  automobile3.cilindrata_motore()
  automobile3.cambio_olio()