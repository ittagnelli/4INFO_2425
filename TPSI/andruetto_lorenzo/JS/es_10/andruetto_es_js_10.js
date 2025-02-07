let utente = {
    nome: 'Mario',
    cognome: 'Rossi',
    anni: 10,
    altezza: 140
}
let chiavi = Object.keys(utente);

for(let i = 0; i < chiavi.length; i++) {
    console.log(utente[chiavi[i]]);
}