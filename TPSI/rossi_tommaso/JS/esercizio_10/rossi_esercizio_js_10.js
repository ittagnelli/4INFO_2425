let utente = { 
    'nome': 'Marco',
    'cognome': 'Rossi'
};

for (let i = 0; i < Object.keys(utente).length; i++) {
    console.log('chiave:', Object.keys(utente)[i])
    console.log('valore: ', Object.values(utente)[i]);
}