class Enumera {
    //INSERISCI QUI IL TUO CODICE
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
    //INSERISCI QUI IL TUO CODICE

    constructor(razza, colore, nome) {
        super(razza, colore, nome);
    }


}

export class Automobile extends Enumera {
   //INSERISCI QUI IL TUO CODICE

    constructor(marca, anno, modello) {
        super(marca, anno, modello);
    }

}

export class Poligono extends Enumera {
   //INSERISCI QUI IL TUO CODICE

    constructor(l1, l2, forma) {
        super(l1, l2, forma);
    }

}
