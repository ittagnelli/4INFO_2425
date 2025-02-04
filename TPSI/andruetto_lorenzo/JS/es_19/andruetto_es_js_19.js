function en(macchina){
    let key = Object.keys(macchina);
    
    for(key in macchina){
        console.log(key);
        console.log(typeof(macchina[key]) === 'string' ? macchina[key].toLowerCase() : macchina[key]);
        console.log(macchina[key], '\n');
    }
}

let Automobile = function(marca, modello, cavalli, colore, prezzo) {
    (this.marca = marca),
    (this.modello = modello),
    (this.cavalli = cavalli),
    (this.colore = colore),
    (this.prezzo = prezzo);
};

function main(){
    let Panda = new Automobile('FIAT', 'panda', '69', 'bianca', '15000');
    en(Panda);

    let Ferrari = new Automobile('Ferrari', '250GT', '220', 'red', '200000')
}

main()