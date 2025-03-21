export class Orario {
   //INSERISCI QUI IL TUO CODICE
   constructor(h,m,s){
      this.h = h
      this.m = m
      this.s = s
   }
   min(o2,o3){
      let [orario1, orario2 , orario3] = [new Date(1970, 0, 1, this.h, this.m, this.s).getTime(), new Date(1970, 0, 1, o2.h, o2.m, o2.s).getTime(), new Date(1970, 0, 1, o3.h, o3.m, o3.s).getTime()];
      console.log(orario1 + ' ' + typeof(orario1))
      let min = Math.min(orario1,orario2,orario3)
      let minTime = new Date(min)
      return {
         s: minTime.getSeconds(),
         m: minTime.getMinutes(),
         h:  minTime.getHours()
     }
   }
}
