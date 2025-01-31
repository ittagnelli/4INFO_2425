let utente = {
    nome: "Rebecca",
    cognome: "Gavinelli"
};

let chiavi = Object.keys(utente);
for(let i=0; i< chiavi.length; i++){
    let k =chiavi[i]
    let v = utente[k]
    console.log(utente[chiavi[i]])
}
