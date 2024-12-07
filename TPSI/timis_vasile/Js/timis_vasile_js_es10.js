let utente = {
    nome: 'Vasile',
    cognome: 'Timis',
    anni: 31,
    altezza: 195
}
let chiavi = Object.keys(utente);

for(let i = 0; i < chiavi.length; i++) {
    console.log(utente[chiavi[i]]);
}