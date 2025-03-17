export class Poligono {
   //INSERISCI QUI IL TUO CODICE
   constructor(l) { this.lunghezza = l;};
}

export class Quadrato extends Poligono {
   //INSERISCI QUI IL TUO CODICE
   constructor(l) { super(l); };
   perimetro() { return this.lunghezza * 4 };
   area() { return this.lunghezza ** 2; };
}

export class TriangoloEquilatero extends Poligono {
   //INSERISCI QUI IL TUO CODICE
   constructor(l) { super(l); };

   perimetro() { return this.lunghezza * 3 };
   area() { return Math.sqrt(3) / 4 * this.lunghezza ** 2; };
}

export class Pentagono extends Poligono {
   //INSERISCI QUI IL TUO CODICE
   constructor(l) { super(l); };
   perimetro() { return this.lunghezza * 5 };
   area() { return (1/4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * (this.lunghezza ** 2) };
}

export class Esagono extends Poligono {
   //INSERISCI QUI IL TUO CODICE
   constructor(l) { super(l); };
   perimetro() { return this.lunghezza * 6 };
   area() { return 3 * Math.sqrt(3) / 2 * this.lunghezza ** 2 }
}

export class Ettagono extends Poligono {
   //INSERISCI QUI IL TUO CODICE
   constructor(l) {super(l);};
   perimetro() { return this.lunghezza * 7; };
   area() { return (7 / 4) * (this.lunghezza ** 2) * 1/Math.tan(Math.PI / 7) };
}

export class Ottagono extends Poligono {
   //INSERISCI QUI IL TUO CODICE
   constructor(l) { super(l); };

   perimetro() { return this.lunghezza * 8 };
   area() {return 2 * (1 + Math.sqrt(2)) * (this.lunghezza ** 2)}
}
