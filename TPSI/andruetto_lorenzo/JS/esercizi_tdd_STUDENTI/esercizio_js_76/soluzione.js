export class Orario {
    //INSERISCI QUI IL TUO CODICE
    constructor(ore, minuti, secondi) {this.h = ore; this.m = minuti; this.s = secondi;};

    diff(orario) {
        this.milli = (this.h * 3600 + this.m * 60 + this.s) * 1000;
        let msOrario = (orario.h * 3600 + orario.m * 60 + orario.s) * 1000;
        const diff = this.milli > msOrario ? this.milli - msOrario : msOrario - this.milli;

        return {
            milliseconds: diff,
            seconds: diff / 1000,
            minutes: diff / 60000,
            hours: diff / 3600000,
        }
    }
}
