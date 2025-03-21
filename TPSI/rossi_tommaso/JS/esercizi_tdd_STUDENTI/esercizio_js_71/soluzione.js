export class Poligono {

   constructor(len_lato) { this.len_lato = len_lato }
}

export class Quadrato extends Poligono {

   constructor(len_lato) { super(len_lato); }

   perimetro() { return this.len_lato * 4 }
   area() { return this.len_lato ** 2 }
}

export class TriangoloEquilatero extends Poligono {

   constructor(len_lato) { super(len_lato); }

   perimetro() { return this.len_lato * 3 }
   area() { return Math.sqrt(3) / 4 * (this.len_lato ** 2) }
}

export class Pentagono extends Poligono {

   constructor(len_lato) { super(len_lato); }

   perimetro() { return this.len_lato * 5 }
   area() { return (1 / 4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * (this.len_lato ** 2) }
}

export class Esagono extends Poligono {

   constructor(len_lato) { super(len_lato); }

   perimetro() { return this.len_lato * 6 }
   area() { return 3 * (Math.sqrt(3) / 2) * (this.len_lato ** 2) }
}

export class Ettagono extends Poligono {

   constructor(len_lato) { super(len_lato); }

   perimetro() { return this.len_lato * 7 }
   area() { return (7 / 4) * (1 / Math.tan(Math.PI / 7)) * (this.len_lato ** 2) }
}

export class Ottagono extends Poligono {

   constructor(len_lato) { super(len_lato); }

   perimetro() { return this.len_lato * 8 }
   area() { return 2 * (1 + Math.sqrt(2)) * (this.len_lato ** 2) }
}