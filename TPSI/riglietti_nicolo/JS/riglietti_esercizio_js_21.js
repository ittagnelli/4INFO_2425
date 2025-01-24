function somma(a, b){
    return a + b;
}

function prodotto(a, b){
    return a * b;
}

function potenza(a, b){
    return a ** b;
}

function calcola(a, b, callback){
    return callback(a, b)
}

function main(){
    console.log(calcola(2, 8, somma));
    console.log(calcola(10, 5, prodotto));
    console.log(calcola(3, 4, potenza));
}

main();
