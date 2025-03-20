export class Orario {
    constructor(ore, minuti, secondi) {
        this.ore = ore;
        this.minuti = minuti;
        this.secondi = secondi;
    }

    diff(other) {
        const thisTimeInSeconds = this.ore * 3600 + this.minuti * 60 + this.secondi;
        const otherTimeInSeconds = other.ore * 3600 + other.minuti * 60 + other.secondi;
        const diffInSeconds = Math.abs(thisTimeInSeconds - otherTimeInSeconds);

        return {
            milliseconds: diffInSeconds * 1000,
            seconds: diffInSeconds,
            minutes: diffInSeconds / 60,
            hours: diffInSeconds / 3600
        };
    }
}

const ora1 = new Orario(24, 10, 30);
const ora2 = new Orario(23, 59, 59);
const ora3 = new Orario(10, 20, 30);
const ora4 = new Orario(11, 20, 30);

console.log(ora1.diff(ora2));
console.log(ora2.diff(ora3));
console.log(ora3.diff(ora1));
console.log(ora4.diff(ora1));
console.log(ora2.diff(ora4));