class Quadrato {
    constructor(l){
        this.lunghezza = l
    }

    set lunghezza(val){
        this._lunghezza = val
    }

    get perimetro(){
        return this._lunghezza * 4
    }

    get area(){
        return this._lunghezza ** 2
    }
}

function main(){
    q = new Quadrato(10)
    console.log("area: ", q.area, "\nperimetro: ", q.perimetro)
}

main()