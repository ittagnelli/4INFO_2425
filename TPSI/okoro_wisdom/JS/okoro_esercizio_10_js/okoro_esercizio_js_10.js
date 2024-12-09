let utente = {
    nome: "Wisdom",
    cognome: "Okoro",
    genere: "maschio",
    residenza: "Torino"
};

let chiavi = Object.keys(utente);

for(let i = 0; i < chiavi.length; i++){
    console.log(utente[chiavi[i]])
}