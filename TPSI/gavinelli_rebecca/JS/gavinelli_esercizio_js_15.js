function fibonacci(n) {
    n = parseInt(n);

    if (n < 0) {
        console.log("Input non valido.Devi inserire un numero intero che sia maggiore o uguale a 0.");
        return;
    }

    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

function main() {
    console.log(fibonacci(5));  
    console.log(fibonacci(8));  
    console.log(fibonacci(15)); 
    console.log(fibonacci(20)); 
}

main();
