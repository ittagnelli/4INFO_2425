let utente = {
    nome: "Edoardo",
    cognome: "Attanasio",
    genere: "maschio",
    residenza: "Nichelino"
};

let chiavi = Object.keys(utente);

for(let i = 0; i < chiavi.length; i++){
    console.log(utente[chiavi[i]])
}