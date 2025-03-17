export class Poligono {
   constructor(lunghezza, numeroLati) {
       this.lunghezza = lunghezza;
       this.numeroLati = numeroLati;
   }

   perimetro() {
       return this.lunghezza * this.numeroLati;
   }

   area() {
       const apotema = this.lunghezza / (2 * Math.tan(Math.PI / this.numeroLati));
       return (this.perimetro() * apotema) / 2;
   }

export class Quadrato extends Poligono {
      constructor(lunghezza) {
          super(lunghezza, 4);
      }
  }
  
export class TriangoloEquilatero extends Poligono {
      constructor(lunghezza) {
          super(lunghezza, 3);
      }
  }
  
export class Pentagono extends Poligono {
      constructor(lunghezza) {
          super(lunghezza, 5);
      }
  }
  
export class Esagono extends Poligono {
      constructor(lunghezza) {
          super(lunghezza, 6);
      }
  }
  
export class Ettagono extends Poligono {
      constructor(lunghezza) {
          super(lunghezza, 7);
      }
  }
  
export class Ottagono extends Poligono {
      constructor(lunghezza) {
          super(lunghezza, 8);
      }
  }
  