function stampa(messaggio){
    console.log(messaggio);
}

function Automobile(persone, velocita, rapporto, onOff) {
    (this.persone = persone),
    (this.velocita = velocita),
    (this.rapporto = rapporto),
    (this.onOff = onOff),
    (this.stato = () => {
        console.log('Stato auto: ');
        console.log(`   
    persone a bordo: ${this.persone}
    velocità: ${this.velocita}
    rapporto velocità: ${this.rapporto}
    stato: ${this.isOn ? 'accesa' : 'spenta'}
---------------------`);
    });

    this.impostaPersone = function impostaPersone(pers){
        if(this.velocita > 0){
            stampa('ERRORE: non è possibile modificare il numero di persone con l\'auto in movimento!');
        }else if(pers < 0 || pers > 5){
            stampa('ERRORE: numero persone non valido!')
        }else {
            this.persone = pers;
        }

        this.stato();
    };

    this.impostaVelocita = function impostaVelocita(vel){

        if(onOff){
            stampa('ERRORE: l\'lauto è spenta')
        }else if((vel < 0 || vel > 180)){
            stampa('ERRORE: velocità non valida!')
        } else if(Math.abs(vel - this.velocita) > 30){
            stampa('ERRORE: cambio di velocità non possibile!')
        }else{
            this.velocita = vel;
        }

        this.stato();
    };

    this.aumentaRapporto = function aumentaRapporto(){

        if(onOff){
            stampa('ERRORE: l\'lauto è spenta')
        }else if(this.rapporto > 5){
            stampa("ERRORE: rapporto inserito non valido!")
        } else{
            this.rapporto++;
        }

        this.stato();
    };

    this.diminuisciRapporto = function diminuisciRapporto(){

        if(onOff){
            stampa('ERRORE: l\'lauto è spenta')
        }else if(this.rapporto < 2){
            stampa("ERRORE: rapporto inserito non valido!")
        } else{
            this.rapporto--;
        }

        this.stato();
    };

    this.impostaOnOff = function impostaOnOff(){
        this.isOn = !this.isOn;
        console.log(`L'auto è ora ${this.isOn ? 'accesa' : 'spenta'}.`);
        if (!this.isOn) {
            this.velocita = 0; 
        }
        this.stato();
    }
}

function main(){
    let auto = new Automobile(0, 0, 1, false); 
    
    auto.stato();

    auto.impostaOnOff();

    auto.impostaPersone(5);

    auto.impostaVelocita(10);
    auto.impostaVelocita(20);
    auto.impostaPersone(3);
    auto.impostaVelocita(70);
    
    auto.aumentaRapporto();
    auto.aumentaRapporto();
    auto.aumentaRapporto();
    auto.aumentaRapporto();
    auto.aumentaRapporto();
    auto.aumentaRapporto();

    auto.diminuisciRapporto();
    auto.diminuisciRapporto();
    auto.diminuisciRapporto();
    auto.diminuisciRapporto();
    auto.diminuisciRapporto();
    auto.diminuisciRapporto();

    auto.impostaOnOff();
    auto.impostaPersone(0);
}

main();