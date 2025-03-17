export class Poligono {
   constructor(lunghezzaLato, numeroLati) {
       this.lunghezzaLato = lunghezzaLato;
       this.numeroLati = numeroLati;
   }

   perimetro() {
       return this.lunghezzaLato * this.numeroLati;
   }

   area() {
       const apotema = this.lunghezzaLato / (2 * Math.tan(Math.PI / this.numeroLati));
       return (this.perimetro() * apotema) / 2;
   }
}

export class TriangoloEquilatero extends Poligono {
   constructor(lunghezzaLato) {
       super(lunghezzaLato, 3);
   }
}

export class Quadrato extends Poligono {
   constructor(lunghezzaLato) {
       super(lunghezzaLato, 4);
   }
}

export class Pentagono extends Poligono {
   constructor(lunghezzaLato) {
       super(lunghezzaLato, 5);
   }
}

export class Esagono extends Poligono {
   constructor(lunghezzaLato) {
       super(lunghezzaLato, 6);
   }
}

export class Ettagono extends Poligono {
   constructor(lunghezzaLato) {
       super(lunghezzaLato, 7);
   }
}

export class Ottagono extends Poligono {
   constructor(lunghezzaLato) {
       super(lunghezzaLato, 8);
   }
}