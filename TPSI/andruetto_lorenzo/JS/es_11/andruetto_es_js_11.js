let Automobile = function (modello, color, cavalli, marca, materiale) {
    (this.modello = modello),
    (this.color = color),
    (this.cavalli = cavalli),
    (this.marca = marca),
    (this.materiale = materiale),
    (this.accensione = () => {
        console.log('La macchina è accesa.');
    }),
    (this.spegnimento = () => {
        console.log('La macchina è spenta.');
    }),
    (this.accendiRadio = () => {
        console.log('La radio è accesa.');
    });
};

let Ferrari = new Automobile('250GT', 'Red', '190', 'Ferrari', 'Acciaio');
Ferrari.accensione();
Ferrari.spegnimento();
Ferrari.accendiRadio();

let Panda = new Automobile('Panda', 'White', '69', 'FIAT', 'Acciaio');
Panda.accensione();
Panda.spegnimento();
Panda.accendiRadio();

let Topolino = new Automobile('Topolino', 'Aqua', '30', 'FIAT', 'Acciaio');
Topolino.accensione();
Topolino.spegnimento();
Topolino.accendiRadio();

let bodyCar = new Automobile('Body Car', 'Red', '90', 'Ford', 'Canapa');
bodyCar.accensione();
bodyCar.spegnimento();
bodyCar.accendiRadio();

let supercar = new Automobile('Grecale', 'Black', '240', 'Maserati', 'Acciaio');
supercar.accensione();
supercar.spegnimento();
supercar.accendiRadio();