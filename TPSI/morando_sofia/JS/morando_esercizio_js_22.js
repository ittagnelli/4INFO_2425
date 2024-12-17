const somma = (a, b) => a + b;

const sottrazione = (a, b) => a - b;

const moltiplicazione = (a, b) => a * b;

const divisione = (a, b) => b !== 0 ? a / b : "Errore: divisione per zero";

function main() {
    let num1 = 90, num2 = 4;
    let num3 = 56, num4 = 78;
    
    console.log(`Somma di ${num1} e ${num2}:`, somma(num1, num2));
    console.log(`Somma di ${num3} e ${num4}:`, somma(num3, num4));
    
    console.log(`Sottrazione di ${num1} e ${num2}:`, sottrazione(num1, num2));
    console.log(`Sottrazione di ${num3} e ${num4}:`, sottrazione(num3, num4));
    
    console.log(`Moltiplicazione di ${num1} e ${num2}:`, moltiplicazione(num1, num2));
    console.log(`Moltiplicazione di ${num3} e ${num4}:`, moltiplicazione(num3, num4));
    
    console.log(`Divisione di ${num1} e ${num2}:`, divisione(num1, num2));
    console.log(`Divisione di ${num3} e ${num4}:`, divisione(num3, num4));
    
    console.log(`Divisione di ${num1} e 0:`, divisione(num1, 0));
}

main();
