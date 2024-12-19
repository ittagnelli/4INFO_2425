function operazione(a, b, callback) {
    return callback(a, b);
}

function main() {
    const somma = (a, b) => a + b;
    const prodotto = (a, b) => a * b;
    const elevamento = (a, b) => Math.pow(a, b);

    console.log("Primo test (somma):");
    console.log(operazione(5, 3, somma));  
    console.log("Secondo test (prodotto):");
    console.log(operazione(4, 6, prodotto));  
    console.log("Terzo test (elevamento):");
    console.log(operazione(2, 3, elevamento));  
}

main();
