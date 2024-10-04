function stampa(utente1) {
    for(let i = 0; i < 5; i++) {
        console.log(`Nome: ${Object.keys(utente1)[i]}, Tipo: ${typeof Object.values(utente1)[i]}`);
        if(typeof Object.values(utente1)[i] == "string")
            console.log(`Valore: ${Object.values(utente1)[i].toLowerCase()}`);
        else
            console.log(`Valore: ${Object.values(utente1)[i]}`);
    }
}

let Utente = function(nome, cognome, eta, annoNascita, laurea) {
    (this.nome = nome),
    (this.cognome = cognome),
    (this.eta = eta),
    (this.annoNascita = annoNascita),
    (this.laurea = laurea);
};

let utente1 = new Utente("Mario", "Rossi", 23, 2000, false,);
stampa(utente1);

utente1 = new Utente("Giuseppe", "Verdi", 33, 1990, true);
stampa(utente1);