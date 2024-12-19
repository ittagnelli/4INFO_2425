function stampa(obj) {
    for (let key in obj) {
        let valore = obj[key];
        let tipo = typeof valore;

        if (tipo === 'string') {
            valore = valore.toLowerCase();
        }

        console.log(`Attributo: ${key}, Tipo: ${tipo}, Valore: ${valore}`);
    }
}
function main() {
    const persona1 = {
        nome: 'Matteo',
        età: 17,
        professione: 'studente',
        città: 'torino',
        attivo: true
    };

    const persona2 = {
        nome: 'alex',
        età: 25,
        professione: 'dottore',
        città: 'napoli',
        attivo: false
    };

    stampa(persona1);
    stampa(persona2);
}

main();