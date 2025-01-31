function stampaAttributi(obj) {
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
        nome: 'Marco',
        età: 30,
        professione: 'Ingegnere',
        città: 'Milano',
        attivo: true
    };

    const persona2 = {
        nome: 'Laura',
        età: 25,
        professione: 'Designer',
        città: 'Roma',
        attivo: false
    };

    stampaAttributi(persona1);
    stampaAttributi(persona2);
}

main();
