class Enumera {
    //INSERISCI QUI IL TUO CODICE
    constructor(a, b, c){
        this.a = a
        this.b = b
        this.c = c
    }

    enumera(){
        return [this.a, this.b, this.c]
    }
}

export class Animale extends Enumera {
    //INSERISCI QUI IL TUO CODICE
    constructor(specie, nome, eta){
        super('specie', 'nome', 'eta')
    }
}

export class Automobile extends Enumera {
   //INSERISCI QUI IL TUO CODICE
    constructor(colore, marca, modello){
        super('colore', 'marca', 'modello')
    }
}

export class Poligono extends Enumera {
   //INSERISCI QUI IL TUO CODICE
    constructor(lato, n_lati, reg){
        super('lato', 'n_lati', 'reg')
    }
}
