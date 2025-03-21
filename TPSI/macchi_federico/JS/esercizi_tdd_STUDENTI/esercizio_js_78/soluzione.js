export class Orario {
   //INSERISCI QUI IL TUO CODICE
   constructor(h, m, s) {
      this.h = h;
      this.m = m;
      this.s = s;
  }

  millisecondi() {
      return (this.h * 3600 + this.m * 60 + this.s) * 1000;
  }

  min(orario2, orario3) {
      let ms1 = this.millisecondi();
      let ms2 = orario2.millisecondi();
      let ms3 = orario3.millisecondi();

      if (ms1 < ms2 && ms1 < ms3) {
          console.log(this.h, this.m, this.s);
      } else if (ms2 < ms1 && ms2 < ms3) {
          console.log(orario2.h, orario2.m, orario2.s);
      } else {
          console.log(orario3.h, orario3.m, orario3.s);
      }
  }
}

let orario1 = new Orario(12, 30, 45);

let orario2 = new Orario(13, 45, 30);

let orario3 = new Orario(19, 20, 15);

orario1.min(orario2, orario3);
