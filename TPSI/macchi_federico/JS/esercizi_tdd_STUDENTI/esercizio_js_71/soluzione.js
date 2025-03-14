export class Poligono {
   constructor(lunghezza, nlati) {
      this.lunghezza = lunghezza;
      this.nlati = nlati;
  }

   perimetro() {
      return this.lunghezza * this.nlati;
   }

   area() {

      return (this.nlati * this.lunghezza ** 2) / (4 * Math.tan(Math.PI / this.nlati));
   }
}

export class Quadrato extends Poligono {
   constructor(lunghezza) {
      super(lunghezza, 4); // Un quadrato ha sempre 4 lati
   }
   area(){
      return this.lunghezza ** 2
   }

}

export class TriangoloEquilatero extends Poligono {
   constructor(lunghezza) {
      super(lunghezza, 3); // Un triangolo equilatero ha sempre 3 lati
   }
   // area(){

   //    return ((this.lunghezza ** this.lunghezza)/2)
   // }
}

export class Pentagono extends Poligono {
   constructor(lunghezza) {
      super(lunghezza, 5); // Un pentagono ha sempre 5 lati
   }
}

export class Esagono extends Poligono {
   constructor(lunghezza) {
      super(lunghezza, 6); // Un esagono ha sempre 6 lati
   }
}

export class Ettagono extends Poligono {
   constructor(lunghezza) {
      super(lunghezza, 7); // Un ettagono ha sempre 7 lati
   }
}

export class Ottagono extends Poligono {
   constructor(lunghezza) {
      super(lunghezza, 8); // Un ottagono ha sempre 8 lati
   }
}