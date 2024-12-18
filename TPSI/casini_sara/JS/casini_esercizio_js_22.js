const somma = (a, b) => a + b;
const sottrazione = (a, b) => a - b;
const moltiplicazione = (a, b) => a * b;
const divisione = (a, b) => b !== 0 ? a / b : "Errore: Divisione per zero";

function main() {

    console.log("Somma:");
    console.log(`5 + 3 = ${somma(5, 3)}`); 
    console.log(`10 + 7 = ${somma(10, 7)}`); 

    console.log("\nSottrazione:");
    console.log(`10 - 4 = ${sottrazione(10, 4)}`); 
    console.log(`20 - 15 = ${sottrazione(20, 15)}`); 

    console.log("\nMoltiplicazione:");
    console.log(`6 * 3 = ${moltiplicazione(6, 3)}`); 
    console.log(`7 * 5 = ${moltiplicazione(7, 5)}`); 

    console.log("\nDivisione:");
    console.log(`12 / 4 = ${divisione(12, 4)}`); 
    console.log(`10 / 0 = ${divisione(10, 0)}`); 
}

main();
