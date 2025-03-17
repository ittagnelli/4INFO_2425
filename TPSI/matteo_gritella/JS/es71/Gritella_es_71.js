export class Poligono {
   //INSERISCI QUI IL TUO CODICE
   constructor(l, n_lati) {
      this.l = l;
      this.n_lati = n_lati;
}
   perimetro() {
   return this.l * this.n_lati;
}
   area() {
      let pi = Math.pi;

      return (this.n_lati * (this.l ** 2)) / (4 * (1 / Math.tan(pi / this.n_lati)));
 }    
   } 

export class Quadrato extends Poligono {
   //INSERISCI QUI IL TUO CODICE
   constructor(l) {
       super(l, 4);
   }
}

export class TriangoloEquilatero extends Poligono {
   //INSERISCI QUI IL TUO CODICE
   constructor(l) {
       super(l, 3);
   }
}

export class Pentagono extends Poligono {
   //INSERISCI QUI IL TUO CODICE
   constructor(l) {
       super(l, 5);
   }
}

export class Esagono extends Poligono {
   //INSERISCI QUI IL TUO CODICE
   constructor(l) {
       super(l, 6);
   }
}

export class Ettagono extends Poligono {
   //INSERISCI QUI IL TUO CODICE
   constructor(l) {
       super(l, 7);
   }
}

export class Ottagono extends Poligono {
   //INSERISCI QUI IL TUO CODICE
   constructor(l) {
       super(l, 8);
   }
}


function main() {

   const triangolo = new TriangoloEquilatero(15);
   const quadrato = new Quadrato(10);
   const pentagono = new Pentagono(21);
   const esagono = new Esagono(18);
   const ettagono = new Ettagono(9);
   const ottagono = new Ottagono(12);

   console.log("Triangolo");
   console.log("Perimetro: ", triangolo.perimetro());
   console.log("Area: ", triangolo.area());

   console.log("\nQuadrato");
   console.log("Perimetro: ", quadrato.perimetro());
   console.log("Area: ", quadrato.area());

   console.log("\nPentagono");
   console.log("Perimetro: ", pentagono.perimetro());
   console.log("Area: ", pentagono.area());

   console.log("\nEsagono");
   console.log("Perimetro: ", esagono.perimetro());
   console.log("Area: ", esagono.area());

   console.log("\nEttagono");
   console.log("Perimetro: ", ettagono.perimetro());
   console.log("Area: ", ettagono.area());

   console.log("\nOttagono");
   console.log("Perimetro: ", ottagono.perimetro());
   console.log("Area: ", ottagono.area());
}



main();