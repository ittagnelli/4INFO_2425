export class Calcolatrice {
    constructor() {
        this.tot = 0;
    }

    set_result(n) {
        this.tot = n;
        return this; 
    }

    sum(n) {
        this.tot += n;
        return this;
    }

    sub(n) {
        this.tot -= n;
        return this;
    }

    mul(n) {
        this.tot *= n;
        return this;
    }

    div(n) {
        this.tot /= n;
        return this;
    }

    get_result() {
        return this.tot;
    }
}
