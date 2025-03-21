export class Orario {
   constructor(ore, minuti, secondi) {
       this.ore = ore;
       this.minuti = minuti;
       this.secondi = secondi;
   }

   inSecondi() {
       return this.ore * 3600 + this.minuti * 60 + this.secondi;
   }

   static minore(orario1, orario2, orario3) {
       let min = orario1;

       if (orario2.inSecondi() < min.inSecondi()) {
           min = orario2;
       }
       if (orario3.inSecondi() < min.inSecondi()) {
           min = orario3;
       }

       return min;
   }
}


const orario1 = new Orario(14, 30, 45);
const orario2 = new Orario(10, 15, 30);
const orario3 = new Orario(12, 45, 15);

console.log("Orario minore tra i primi tre:", Orario.minore(orario1, orario2, orario3));

const orario4 = new Orario(8, 0, 0);
const orario5 = new Orario(7, 59, 59);
const orario6 = new Orario(9, 30, 45);

console.log("Orario minore tra i secondi tre:", Orario.minore(orario4, orario5, orario6));
