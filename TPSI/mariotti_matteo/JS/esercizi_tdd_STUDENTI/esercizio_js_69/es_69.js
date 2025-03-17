class Quadrato {
    constructor(l) {
        this.lato = l; 
    }
    
    set lato(l) {
        this._lato = l;
    }

    get lato() {
        return this._lato;
    }
    get perimentro() {
        return this.lato * 4;
    }

    get area() {
        return this.lato * this.lato;
    }

    
} 

l =  5

q = new Quadrato(l);

console.log(q.area)
console.log(q.perimentro)



// q.lato(l)
// alert(q.perimentro(), q.area());