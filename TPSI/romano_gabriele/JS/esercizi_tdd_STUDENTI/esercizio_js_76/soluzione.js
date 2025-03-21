export class Orario {
    constructor(h,m,s){
        this.h = h
        this.m = m
        this.s = s
    }
    
    diff(object){
        let orario1 = new Date(1970, 0, 1, this.h, this.m, this.s);
        let orario2 = new Date(1970, 0, 1, object.h, object.m, object.s);
        let ms = orario1 > orario2 ? orario1 - orario2 : orario2 - orario1 ;
        return {
            milliseconds: ms,
            seconds: ms / 1000,
            minutes: ms / (1000 * 60),
            hours:  ms / (1000 * 60 * 60)
        }
    }
}
