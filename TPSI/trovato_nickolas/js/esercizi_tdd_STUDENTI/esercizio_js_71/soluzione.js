export class Poligono {
   constructor(numLati, lunghezzaLato) {
       this.numLati = numLati;
       this.lunghezzaLato = lunghezzaLato;
   }

   perimetro() {
       return this.numLati * this.lunghezzaLato;
   }

   area() {
       return (this.numLati * Math.pow(this.lunghezzaLato, 2)) / (4 * Math.tan(Math.PI / this.numLati));
   }

   stampa() {
       console.log(`Perimetro: ${this.perimetro().toFixed(2)} cm`);
       console.log(`Area: ${this.area().toFixed(2)} cm²`);
   }
}

export class Quadrato extends Poligono {
   constructor(lunghezzaLato) {
       super(4, lunghezzaLato);
   }
}

export class TriangoloEquilatero extends Poligono {
   constructor(lunghezzaLato) {
       super(3, lunghezzaLato);
   }
}

export class Pentagono extends Poligono {
   constructor(lunghezzaLato) {
       super(5, lunghezzaLato);
   }
}

export class Esagono extends Poligono {
   constructor(lunghezzaLato) {
       super(6, lunghezzaLato);
   }
}

export class Ettagono extends Poligono {
   constructor(lunghezzaLato) {
       super(7, lunghezzaLato);
   }
}

export class Ottagono extends Poligono {
   constructor(lunghezzaLato) {
       super(8, lunghezzaLato);
   }
}

const poligoni = [
   new TriangoloEquilatero(15),
   new Quadrato(10),
   new Pentagono(21),
   new Esagono(18),
   new Ettagono(9),
   new Ottagono(12)
];

poligoni.forEach((poligono, index) => {
   console.log(`Poligono ${index + 1}:`);
   poligono.stampa();
   console.log("--------------------");
});
