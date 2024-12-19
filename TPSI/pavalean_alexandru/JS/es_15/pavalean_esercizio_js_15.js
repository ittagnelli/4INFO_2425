function successione(numero){
    let a = 0;
    let b = 1;
    let successione = [];
    for(i = 2; i < numero + 1; i++){
        successione[i] = a;
        a = b;
        b = a + b;
    }
    return successione[numero];
}

function main(){
    console.log(successione(10));
    console.log(successione("10"));
    console.log(successione(2));
    console.log(successione("6"));
    console.log(successione(8));
}

main()