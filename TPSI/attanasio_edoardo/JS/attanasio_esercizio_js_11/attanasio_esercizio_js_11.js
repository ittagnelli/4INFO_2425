
let Automobile = function(nomeAuto,numCilindrata,color,prezzo,residenza){

        (this.modello = nomeAuto),
        (this.cilindrata = numCilindrata),
        (this.colore = color),
        (this.costo =  prezzo),
        (this.regione = residenza),
        (this.speak = function() {
            console.log(`Il modello dell'auto è ${this.modello}`);
        }),
        (this.color = function() {
            console.log(`Il colore della macchina è ${this.colore}`);
        }),
        (this.size = function(){
            console.log(`La residenza dell'auto è ${this.regione}`);
        });
}   

let automobili = Array(5);

automobili[0] = new Automobile("Ford","400","Nera","30000","Piemonte");
automobili[1] = new Automobile("Ford1","400","Nera","30000","Piemonte");
automobili[2] = new Automobile("Ford2","400","Nera","30000","Piemonte");
automobili[3] = new Automobile("Ford3","400","Nera","30000","Piemonte");
automobili[4] = new Automobile("Ford4","400","Nera","30000","Piemonte");

for(let i = 0; i < automobili.length; i++){
    console.log(automobili[i])
    automobili[i].speak();
    automobili[i].color();
    automobili[i].size();
}
