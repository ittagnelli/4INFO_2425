class Quadrato {
    constructor(l){
        this.lato = l;
    }

    set lato(val) { this._lato = val; }

    get perimetro(){return this._lato * 4;}

    get area(){return this._lato * this._lato;}
    



    }


function main(){
    let utente = new Quadrato(10);
    console.log(`il perimetro del quadrato è ${utente.perimetro}`);
    alert(`l'area del quadrato è ${utente.area}`);

}

main();