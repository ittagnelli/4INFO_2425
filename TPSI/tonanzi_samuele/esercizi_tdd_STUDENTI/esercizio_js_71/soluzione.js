export class Poligono {
   constructor(lung){this.lung = lung}
}

export class Quadrato extends Poligono {
   constructor(lung){ super(lung); }

   perimetro(){ return this.lung * 4}
   area(){ return this.lung ** 2}
}

export class TriangoloEquilatero extends Poligono {
   constructor(lung){ super(lung); }

   perimetro(){ return this.lung * 3}
   area(){ return Math.sqrt(3) / 4 * (this.lung ** 2)}
}

export class Pentagono extends Poligono {
   constructor(lung){ super(lung); }

   perimetro(){ return this.lung * 5}
   area(){ return (1/4) * Math.sqrt(5*(5 + 2* Math.sqrt(5))) * (this.lung ** 2)}
}

export class Esagono extends Poligono {
   constructor(lung){ super(lung); }

   perimetro(){ return this.lung * 6}
   area(){ return 3*(Math.sqrt(3) / 2) * (this.lung ** 2)}
}

export class Ettagono extends Poligono {
   constructor(lung){ super(lung); }

   perimetro(){ return this.lung * 7}
   area(){ return (7 / 4) * (1/Math.tan(Math.PI / 7)) * (this.lung ** 2)}
}

export class Ottagono extends Poligono {
   constructor(lung){ super(lung); }

   perimetro(){ return this.lung * 8}
   area(){ return 2 * (1 + Math.sqrt(2)) * (this.lung ** 2)}
}