export class Orario {
    //INSERISCI QUI IL TUO CODICE
    constructor(h, m, s) {
        this.h = h;
        this.m = m;
        this.s = s;
    }

    millisecondi() {
        let mi = (this.h * 3600 + this.m * 60 + this.s) * 1000;
        console.log(mi);
    }

    diff(orario2) {
        let diff1 = (this.h * 3600 + this.m * 60 + this.s) * 1000;
        let diff2 = (orario2.h * 3600 + orario2.m * 60 + orario2.s) * 1000;
        let differenza = diff1 - diff2;

        if (differenza < 0) {
            differenza = -differenza;
        }

        let result = {
            mill: differenza,
            seco: differenza / 1000,
            min: differenza / 60000,
            ore: differenza / 3600000,
        };

        console.log(result);
    }

}
