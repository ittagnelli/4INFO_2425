class Enumera {
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
    constructor(specie, nome, eta){
        super('specie', 'nome', 'eta')
    }
}

export class Automobile extends Enumera {
    constructor(colore, marca, modello){
        super('colore', 'marca', 'modello')
    }
}

export class Poligono extends Enumera {
    constructor(lato, n_lati, reg){
        super('lato', 'n_lati', 'reg')
    }
}