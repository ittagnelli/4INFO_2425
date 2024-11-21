
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

let automobili = Array(5);

automobili[0] = Automobile("Ford","400","Nera","30000","Piemonte");
automobili[1] = Automobile("Ford1","400","Nera","30000","Piemonte");
automobili[2] = Automobile("Ford2","400","Nera","30000","Piemonte");
automobili[3] = Automobile("Ford3","400","Nera","30000","Piemonte");
automobili[4] = Automobile("Ford4","400","Nera","30000","Piemonte");

for(let i = 0; i < automobili.length; i++){
    console.log(automobili[i])
    automobili[i].speak();
    automobili[i].color();
    automobili[i].size();
}
