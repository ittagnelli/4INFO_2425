function fibonacci(n){
    let a = 0;
    let b = 1;

    for(let i = 0; i < +n - 1; i++){
        let somma = a + b;
        a = b;
        b = somma;
        
        i == n - 2 && console.log(somma)
    }
}

function main(){
    fibonacci('3');
    fibonacci('6');
    fibonacci('9')
    fibonacci('8');
    fibonacci('10');
}

main();