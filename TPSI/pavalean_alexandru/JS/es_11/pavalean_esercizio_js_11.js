
let Automobile = function(nomeAuto,numCilindrata,color,prezzo,residenza){

    return {
        modello: nomeAuto,
        cilindrata: numCilindrata,
        colore: color,
        costo: prezzo,
        regione: residenza,
        speak() {
            console.log(`Il modello dell'auto è ${this.modello}`);
        },
        color() {
            console.log(`Il colore della macchina è ${this.colore}`);
        },
        size() {
            console.log(`La residenza dell'auto è ${this.regione}`);
        }
    };
}