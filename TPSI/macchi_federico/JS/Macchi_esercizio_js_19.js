function registraPersona(persona) {
    const coppieChiaveValore = Object.entries(persona);
    for (const [chiave, valore] of coppieChiaveValore) {
        console.log(`Chiave: ${chiave}, Tipo: ${typeof valore}`);
        const valoreFormattato = typeof valore === "string" ? valore.toLowerCase() : valore;
        console.log(`Valore: ${valoreFormattato}`);
    }
}

function Persona(nome, cognome, eta, annoNascita, laureato) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.annoNascita = annoNascita;
    this.laureato = laureato;
}

let persona1 = new Persona("Giovanni", "Verdi", 30, 1993, true);
registraPersona(persona1);

persona1 = new Persona("Anna", "Neri", 22, 2001, false);
registraPersona(persona1);
