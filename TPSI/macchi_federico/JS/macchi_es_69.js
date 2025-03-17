function main(){

    class Quadrato {
        constructor(lato) {
            this.lato = lato;
        }
        Perimetro() {
            return this.lato*4
        }
        Area() {
            return this.lato**2
        }
    }
    
    let rayan = new Quadrato(6);
    console.log(rayan.Perimetro())
    console.log(rayan.Area())


}



main()