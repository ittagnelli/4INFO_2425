let animale = function(razza,nome,anni){
    this.razza = razza;
    this.nome = nome;
    this.anni = anni;
    this.verso = function() {
        console.log(`${this.razza} ha fame`)
    }
    this.caratteristiche = function() {
        console.log(`${this.nome} è un/a ${this.razza} e ha ${this.anni} anni`)
    }
    this.enumera = function(){
        console.log(`${this.nome}  ${this.razza}   ${this.anni}`);
    }
}

let automobile = function(marca,colore,cavalli){
    this.marca = marca;
    this.colore = colore;
    this.cavalli = cavalli;
    this.accensione = function(){
        console.log(`accensione di ${this.marca}`);
    }
    this.caratteristiche = function(){
        console.log(`la ${this.marca} è di colore ${this.colore} e ha ${this.cavalli} cavalli`);
    }
    this.enumera = function(){
        console.log(`${this.marca}  ${this.colore}   ${this.cavalli}`);
    }
}


let poligono = function(arma,colpi,bersagli){
    this.arma = arma;
    this.colpi = colpi;
    this.bersagli = bersagli;
    this.utente = function(){
        console.log(`l'utente sceglie una ${this.arma}`);
    }
    this.sparatoria = function(){
        console.log(`l'utente sta sparando con ${this.arma} che ha ${this.colpi} e ha colpito ${this.bersagli} volte il bersaglio`);
    }

    this.enumera = function(){
        console.log(`${this.arma}  ${this.colpi}  ${this.bersagli}`);
    }
}

let animale1 = new animale("cane","adolf", 10);
animale1.verso();
animale1.caratteristiche();
animale1.enumera();

let animale2 = new animale("gatto","buddy",4);
animale2.verso();
animale2.caratteristiche();
animale2.enumera();

let automobile1 = new automobile("Ferrari","Rosso", 150);
automobile1.accensione();
automobile1.caratteristiche();
automobile1.enumera();

let automobile2 = new automobile("BMW","Blu", 100);
automobile2.accensione();
automobile2.caratteristiche();
automobile2.enumera();

let poligono1 = new poligono("AK",70,30);
poligono1.utente();
poligono1.sparatoria();
poligono1.enumera();

let poligono2 = new poligono("mitragliette",100,70);
poligono2.utente();
poligono2.sparatoria();
poligono2.enumera();

