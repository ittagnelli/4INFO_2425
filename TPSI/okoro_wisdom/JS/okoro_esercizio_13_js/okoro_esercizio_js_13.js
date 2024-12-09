function sommaNumeri(n) {
  
    if ( n ==='string' || n <= 0) {
        console.log("Errore: il parametro deve essere un numero intero positivo maggiore di zero.");
        return null;
    }

   
    let somma = 0;
    for (let i = 0; i <= n; i++) {
        somma += i;
    }

    return somma;
}

function main() {
    console.log("Test 1: Parametro = 5 (numero)");
    parametro1 = Number(5);
    console.log("Risultato:", sommaNumeri(parametro1));

    console.log("\nTest 2: Parametro = '10' (string)");
    parametro2 = String(10);
    console.log("Risultato:", sommaNumeri(parametro2));

    console.log("\nTest 3: Parametro = -3 (numero negativo");
    parametro3 = Number(-3);
    console.log("Risultato:", sommaNumeri(parametro3)); 

}


main();
