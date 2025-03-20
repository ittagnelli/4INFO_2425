export class Orario {
   constructor(ore, minuti, secondi) {
       this.ore = ore;
       this.minuti = minuti;
       this.secondi = secondi;
   }

   static min(ora1, ora2, ora3) {
       const time1 = ora1.ore * 3600 + ora1.minuti * 60 + ora1.secondi;
       const time2 = ora2.ore * 3600 + ora2.minuti * 60 + ora2.secondi;
       const time3 = ora3.ore * 3600 + ora3.minuti * 60 + ora3.secondi;

       const minTime = Math.min(time1, time2, time3);

       if (minTime === time1) return { h: ora1.ore, m: ora1.minuti, s: ora1.secondi };
       if (minTime === time2) return { h: ora2.ore, m: ora2.minuti, s: ora2.secondi };
       return { h: ora3.ore, m: ora3.minuti, s: ora3.secondi };
   }
}

const ora1 = new Orario(24, 10, 30);
const ora2 = new Orario(23, 59, 59);
const ora3 = new Orario(10, 20, 30);
console.log(Orario.min(ora1, ora2, ora3));

const ora4 = new Orario(23, 10, 30);
const ora5 = new Orario(21, 59, 59);
const ora6 = new Orario(13, 20, 30);
console.log(Orario.min(ora4, ora5, ora6));