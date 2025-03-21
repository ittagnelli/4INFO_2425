export class Orario {
    constructor(h, m, s){
        this.h = h
        this.m = m
        this.s = s
    }

    millisecondi() { return (this.h * 3600 + this.m * 60 + this.s) * 1000; }

    diff(orario2) {
        const differenza = this.millisecondi() > orario2.millisecondi() ? this.millisecondi() - orario2.millisecondi() : orario2.millisecondi() - this.millisecondi();

        return{
            milliseconds: differenza,
            seconds: differenza / 1000,
            minutes: differenza /  60000,
            hours: differenza / 3600000,
        };
    }
}
