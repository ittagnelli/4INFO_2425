// Esercizio 15 Javascript, mariotti

function inserire_valore(n){ //Useless with the new method
    const ennesimo_numero = number(n);
    return ennesimo_numero;
}

function fibbonacci(ennesimo_numero){ // Sequenza di fibbonnacci
    a = 0;
    b = 1;
    for (let i = 0; i < ennesimo_numero-1; i++) {
        c = a + b;
        a = b;
        b = c;        
        //console.log(c)
    }
    console.log(c)
}

function main(){
    n = 4;
    n1 = 9;

    console.log("Entrato nel main")
    for (let i = n; i <= n1; i++) {
        console.log("n = ", i)
        // ennesimo_numero = inserire_valore();
        ennesimo_numero = i;
        fibbonacci(ennesimo_numero);
    }
}

main();