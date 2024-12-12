function sum(c) {

    if ( c ==='string' || c <= 0) {
        console.log("Errore: Valore minore o uguale a zero");
        return null;
    }


    let sum1 = 0;
    for (let i = 0; i <= c; i++) {
        sum1 += i;
    }

    return sum1;
}

function main() {
    console.log("Numero");
    par1 = Number(5);
    console.log("Risultato:", sum(par1));

    console.log("\nStringa");
    par2 = String(10);
    console.log("Risultato:", sum(par2));

    console.log("\nNumero negativo");
    par3 = Number(-3);
    console.log("Risultato:", sum(par3)); 

}


main();