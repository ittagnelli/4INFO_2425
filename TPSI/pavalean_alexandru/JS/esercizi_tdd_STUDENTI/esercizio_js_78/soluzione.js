export class Orario {
   //INSERISCI QUI IL TUO CODICE
      constructor(h, m, s) {
      this.h = h
      this.m = m
      this.s = s
   }

   millisecondi() { return (this.h * 3600 + this.m * 60 + this.s) * 1000; }

   min(orario2, orario3) {

      let ms1 = this.millisecondi()
      let ms2 = orario2.millisecondi()
      let ms3 = orario3.millisecondi()

      return ms1 < ms2 &&ms1 < ms3 ? {h: this.h, m: this.m, s: this.s } : ms2 < ms1 && ms2 < ms3 ? {h: orario2.h, m: orario2.m, s: orario2.s} : {h: orario3.h, m: orario3.m, s: orario3.s}
   }
}
