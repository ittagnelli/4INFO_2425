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
       super(lunghezza, 4); 
    }
    area(){
       return this.lunghezza ** 2
    }
 
 }
 
 export class TriangoloEquilatero extends Poligono {
    constructor(lunghezza) {
       super(lunghezza, 3); 
    }
     area(){
 
       return ((this.lunghezza ** this.lunghezza)/2)
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