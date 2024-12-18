function fibo(n) {
    let fibonacci = [0, 1];
    for(let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i-2] + fibonacci[i-1]);
    }
    return fibonacci[n-1];
}

console.log(fibo(6));

console.log(fibo(23));

console.log(fibo("437"));

console.log(fibo("134"));

console.log(fibo(100 - "40"));
