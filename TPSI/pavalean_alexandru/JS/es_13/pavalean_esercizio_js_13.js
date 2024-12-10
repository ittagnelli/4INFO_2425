function somma(numero){
    let sum = 0;
    for(let i = 0; i < numero; i++){
        sum = sum + i
    }
    return sum;
}

function main(){
    console.log(somma(10));
    console.log(somma('10'));
    console.log(somma(5));
}

main();