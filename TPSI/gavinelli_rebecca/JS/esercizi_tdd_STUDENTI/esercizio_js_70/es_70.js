export class Calcolatrice {
    constructor() {
        this.result = 0;
    }
    set_result(n) {
        this.result = n;
        return this;
    }

    sum(n) {
        this.result += n;
        return this;
    }

    sub(n) {
        this.result -= n;
        return this;
    }

    mul(n) {
        this.result *= n;
        return this;
    }

    div(n) {
        this.result /= n;
        return this;
    }

    get_result() {
        return this.result;
    }
}