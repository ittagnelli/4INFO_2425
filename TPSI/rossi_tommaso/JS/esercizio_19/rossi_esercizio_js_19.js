function stampa(utente) {
    const chiaviValori = Object.entries(utente);
    for (const [chiave, valore] of chiaviValori) {
        console.log(`Nome: ${chiave}, Tipo: ${typeof valore}`);
        const valoreFormattato = typeof valore === "string" ? valore.toLowerCase() : valore;
        console.log(`Valore: ${valoreFormattato}`);
    }
}

function Utente(nome, cognome, eta, annoNascita, laurea) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.annoNascita = annoNascita;
    this.laurea = laurea;
}

let user = new Utente("Mario", "Rossi", 19, 2005, false);
stampa(user);

user = new Utente("Luigi", "Bianchi", 25, 1999, false);
stampa(user);
