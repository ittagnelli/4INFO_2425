class Quadrato {
    constructor(l){
        this.lungh = l
    }

    set lungh(n){
        this._lungh = n
    }

    get p(){
        return this._lungh * 4
    }

    get A(){
        return this._lungh ** 2
    }
}

function main(){
    q = new Quadrato(10)
    console.log("Area: ", q.A, "\nperimetro: ", q.p)
}

main()