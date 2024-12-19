

function proprietaOggetto(oggetto){
    for(chiave in oggetto){
        console.log('nome chiave: ', chiave);
        console.log('tipo: ', typeof oggetto[chiave]);
        typeof oggetto[chiave] == "string" ? console.log('valore: ', oggetto[chiave].toLowerCase()) : console.log('valore: ', oggetto[chiave]);
    }
}


function animale(nome, canile, razza, colorePelo, annoNascita){
    (this.nome = nome),
    (this.canile = canile),
    (this.razza = razza),
    (this.colorePelo = colorePelo),
    (this.annoNascita = annoNascita)
}


let animaleUno = new animale("Yugi", true,"bassotto","nero",2021);
let animaleDue = new animale("Jack", false,"dobberman","bianco",2012);

proprietaOggetto(animaleUno);
proprietaOggetto(animaleDue);