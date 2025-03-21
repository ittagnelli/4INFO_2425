class Enumera {
    constructor(nome, categoria, costo) {
        this.nome = nome;
        this.categoria = categoria;
        this.costo = costo;
    }
    getCosto() {
        return this.costo;
    }
    
    getNome(){
        return this.nome;
    }

    Enumera(){
        return Object.keys(this);
    }
}

export class Animale extends Enumera {
    constructor(razza, eta, dieta) {
        super();
        this.razza = razza;
        this.eta = eta;
        this.dieta = dieta;
    }

    getEta() {
        return this.eta;
    }

    getDieta(){
        return this.dieta;
    }
}

export class Automobile extends Enumera {
    constructor(Marca, Modello, Cavalli){
        super();
        this.marca = Marca;
        this.modello = Modello;
        this.cavalli = Cavalli;
    }

    getmarca(){
        return this.marca;
    }

    getmodello(){
        return this.modello;
    }

}

export class Poligono extends Enumera {
    constructor(lati, vertici, area){
        super();
        this.lati = lati;
        this.vertici = vertici;
        this.area = area;
    }

    getArea(){
        return this.area;
    }

    getLati(){
        return this.lati;
    }
}