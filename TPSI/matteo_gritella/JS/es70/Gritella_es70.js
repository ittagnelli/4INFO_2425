export class Calcolatrice { 
    constructor() {
        this.n = 0;
    }

    set_result(valore) {
        this.n = valore;
        return this;
    }

    sum(valore) {
        this.n += valore;
        return this;
    }

    sub(valore) {
        this.n -= valore;
        return this;
    }

    mul(valore) {
        this.n *= valore;
        return this;
    }

    div(valore) {
        if (valore !== 0) {
            this.n /= valore;
        } else {
            console.log("Errore");
        }
        return this;
    }

    get_result() {
        return this.n;
    }

    reset() {
        this.n = 0;
        return this;
    }
}

function main() {
    const calcolatri = new Calcolatrice();

    const r1 = calcolatri.set_result(6).sub(2).mul(5).sum(8).div(4).get_result();
    const r2 = calcolatri.reset().set_result(11).sum(3).sum(5).sub(5 / 11).get_result();
    const r3 = calcolatri.reset().set_result(29).sum(2).sub(7 / 3 / 2).sum(1).mul(2).get_result();

    console.log("1: ", r1);
    console.log("2: ", r2);
    console.log("3: ", r3);
}

main();