let utente = {
    nome: "Mario",
    cognome: "Rossi"
};

for(let i = 0; i < Object.keys(utente).length; i++)
    console.log("La chiave", Object.keys(utente)[i],  "ha valore", Object.values(utente)[i]);