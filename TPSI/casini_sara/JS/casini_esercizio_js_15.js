function Fibonacci(n){
    n = parseInt(n, 10);
    if (n<0) {
        return "Input non valido: il numero deve essere maggiore o uguale a 0.";
    }
    if (n==0){
        return 0;
    }
    if (n==1){
        return 1;
    }

    let a = 0, b = 1, c;
    for (let i = 2; i <= n; i++){
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

function main(){
    const testCases = [0, 1, 5, 10, 15]; 
    testCases.forEach((testCase) => {
        const result = Fibonacci(testCase);
        console.log(`Fibonacci(${testCase}) = ${result}`);
    });
}


main();
