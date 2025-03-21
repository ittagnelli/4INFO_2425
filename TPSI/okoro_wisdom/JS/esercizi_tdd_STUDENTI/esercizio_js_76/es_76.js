export class Orario {
    constructor(ore, minuti, secondi) {
        this.ore = ore;
        this.minuti = minuti;
        this.secondi = secondi;
    }

    differenza(orario) {
        
        const t1 = this.ore * 3600 + this.minuti * 60 + this.secondi;
        const t2 = orario.ore * 3600 + orario.minuti * 60 + orario.secondi;
        
        
        const diff = Math.abs(t1 - t2);

        return {
            millisecondi: diff * 1000,
            secondi: diff,
            minuti: Math.floor(diff / 60),
            ore: Math.floor(diff / 3600)
        };
    }
}


const orario1 = new Orario(14, 30, 45);
const orario2 = new Orario(16, 15, 30);

console.log("Differenza tra orario1 e orario2:", orario1.differenza(orario2));

const orario3 = new Orario(8, 0, 0);
const orario4 = new Orario(12, 45, 15);

console.log("Differenza tra orario3 e orario4:", orario3.differenza(orario4));
