
const utente = {
    nome: "Mario",
    cognome: "Rossi",
    altezza: 180,
    lunghezza: 8,
    
};

const chiavi = Object.keys(utente);

for (let i = 0; i < chiavi.length; i++) {
    const chiave = chiavi[i];
    console.log(`${chiave}: ${utente[chiave]}`);
}
