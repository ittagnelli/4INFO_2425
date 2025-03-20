export class Orario {
    constructor(ore, minuti, secondi) {
        this.ore = ore;
        this.minuti = minuti;
        this.secondi = secondi;
    }

    differenza(orario) {
        const thisMs = (this.ore * 3600 + this.minuti * 60 + this.secondi) * 1000;
        const orarioMs = (orario.ore * 3600 + orario.minuti * 60 + orario.secondi) * 1000;
        const diffMs = Math.abs(thisMs - orarioMs);

        return {
            millisecondi: diffMs,
            secondi: diffMs / 1000,
            minuti: diffMs / (1000 * 60),
            ore: diffMs / (1000 * 60 * 60)
        };
    }
}

const orario1 = new Orario(10, 30, 15);
const orario2 = new Orario(12, 45, 50);
const orario3 = new Orario(8, 15, 5);

console.log(orario1.differenza(orario2));
console.log(orario1.differenza(orario3));
