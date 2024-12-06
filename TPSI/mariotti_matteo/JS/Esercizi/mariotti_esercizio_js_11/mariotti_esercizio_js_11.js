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