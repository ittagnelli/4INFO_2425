function stampa(user) {
    const chiaviValori = Object.entries(user);

    for (let [chiave, valore] of chiaviValori) {
        console.log(`nome: ${chiave}, tipo: ${typeof valore}`);
        const valoreFormattato = typeof valore === "string" ? valore.toLowerCase() : valore;
        console.log(`valore: ${valoreFormattato}`);
    }
}

function oggetto(nome, cognome, eta, annoNascita, laurea) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.annoNascita = annoNascita;
    this.laurea = laurea;
}

let utente1 = new oggetto("giacomo", "benso", 14, 2010, false);
stampa(user);

let utente2 = new oggetto("francesco", "zizzo", 15, 2006, false);
stampa(user);