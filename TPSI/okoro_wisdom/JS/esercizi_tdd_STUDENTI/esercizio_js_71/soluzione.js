export class Poligono {
   constructor(lato, numLati) {
       this.lato = lato;
       this.numLati = numLati;
   }
   perimetro() {
       return this.lato * this.numLati;
   }
   area() {
       return (this.numLati * Math.pow(this.lato, 2)) / (4 * Math.tan(Math.PI / this.numLati));
   }
}

export class Quadrato extends Poligono {
   constructor(lato) {
       super(lato, 4);
   }
}

export class TriangoloEquilatero extends Poligono {
   constructor(lato) {
       super(lato, 3);
   }
}

export class Pentagono extends Poligono {
   constructor(lato) {
       super(lato, 5);
   }
}

export class Esagono extends Poligono {
   constructor(lato) {
       super(lato, 6);
   }
}

export class Ettagono extends Poligono {
   constructor(lato) {
       super(lato, 7);
   }
}

export class Ottagono extends Poligono {
   constructor(lato) {
       super(lato, 8);
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

poligoni.forEach(p => {
   console.log("----------------------------------------");
   console.log(`Poligono con ${p.numLati} lati`);
   console.log(`Lunghezza lato: ${p.lato} cm`);
   console.log(`Perimetro: ${p.perimetro()} cm`);
   console.log(`Area: ${p.area().toFixed(2)} cm²`);
   console.log("----------------------------------------");
});
