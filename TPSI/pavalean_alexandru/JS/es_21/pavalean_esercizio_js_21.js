function moltiplicazione(a, b){
    return a * b;
}

function elevamento(a, b){
    return a ** b;
}

function calcola(a, b, richiamo){
    return richiamo(a, b)
}

function main(){
    console.log(calcola(5, 3, moltiplicazione));
    console.log(calcola(2, 0, elevamento));
}

main();