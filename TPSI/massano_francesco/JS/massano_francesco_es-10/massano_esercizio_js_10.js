let utente = {
    nome: "mario",
    cognome: "rossi",
    eta: 18,
    altezzza: 180
}


let chiavi = Object.keys(utente); 
for (let i = 0; i < chiavi.length; i++) {
   console.log(`la chiave ${chiavi[i]} ha valore ${utente[chiavi[i]]}`);
    
}