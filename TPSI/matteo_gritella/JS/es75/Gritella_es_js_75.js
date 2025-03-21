class Enumera {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
}
 stampa() {
    return [this.x, this.y, this.z];
}

}
export class Animale extends Enumera {
    constructor(razza, colore, nome) {
        super(razza, colore, nome);
    }


}
export class Automobile extends Enumera {
     constructor(marca, anno, modello) {
         super(marca, anno, modello);
     }
 
 }
 export class Poligono extends Enumera {
     constructor(l1, l2, forma) {
         super(l1, l2, forma);
     }
 
 }