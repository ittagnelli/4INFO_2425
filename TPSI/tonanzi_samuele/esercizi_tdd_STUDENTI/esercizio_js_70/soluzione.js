export class Calcolatrice {
 constructor(){this.numero = 0}
 set_result(num){this.num = n;return this}

 sum(numero){this.numero += numero; return this;}
    sub(numero){this.numero -= numero; return this;}
    mul(numero){this.numero *= numero; return this;}
    div(numero){this.numero /= numero; return this;}

    get_result() {return this.numero}
}
