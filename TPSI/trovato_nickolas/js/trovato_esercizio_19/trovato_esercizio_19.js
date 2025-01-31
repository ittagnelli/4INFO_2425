function stampaAttributi(obj) {
    for (const key in obj) {
        const value = obj[key];
        const tipo = typeof value;
        const valoreStampato = tipo === "string" ? value.toLowerCase() : value;

        console.log(`Nome: ${key}`);
        console.log(`Tipo: ${tipo}`);
        console.log(`Valore: ${valoreStampato}`);
        console.log('---');
    }
}

console.log("Risultato funzione stampa attributi:");

const testObj1 = {
    nome: "Marco",
    età: 25,
    città: "ROMA",
    altezza: 1.75,
    hobby: "CALCIO"
};

const testObj2 = {
    marca: "FIAT",
    modello: "500",
    anno: 2020,
    colore: "ROSSO",
    elettrico: false
};

console.log("Test 1:");
stampaAttributi(testObj1);

console.log("Test 2:");
stampaAttributi(testObj2);