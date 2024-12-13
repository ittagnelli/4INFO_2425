function fibonacci(n) {
    let fibonacci = [0, 1];
    for(let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
    }

    return fibonacci[n-1];
}

console.log(fibonacci(5));

console.log(fibonacci(7));

console.log(fibonacci("17"));

console.log(fibonacci("10"));

console.log(fibonacci(50 - "23"));