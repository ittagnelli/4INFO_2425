export class Poligono {
   constructor(n1,n2){
      this.numLati = n1;
      this.long = n2;
   }

   perimetro(){
      return this.numLati * this.long;
   }

   area(){
      return (this.perimetro * a)/2;
   }
}

export class Quadrato extends Poligono {
   constructor(n2){
      super(4,n2);
   }
   area(){
      return this.long **2;
   }
   
}

export class TriangoloEquilatero extends Poligono {
   constructor(n1,n2){
      super(n1,n2);
   }
}

export class Pentagono extends Poligono {
   constructor(n1,n2){
      super(n1,n2);
   }
}

export class Esagono extends Poligono {
   constructor(n1,n2){
      super(n1,n2);
   }
}

export class Ettagono extends Poligono {
   constructor(n1,n2){
      super(n1,n2);
   }
}

export class Ottagono extends Poligono {
   constructor(n1,n2){
      super(n1,n2);
   }
}
