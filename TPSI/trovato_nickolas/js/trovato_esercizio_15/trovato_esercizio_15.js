
function fibonacci(n) {
    const num = parseInt(n, 10);
    if (num === 0 || num === 1) return 0;
    let a = 0, b = 1, temp;
    for (let i = 2; i <= num; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
console.log("Risultato funzione Fibonacci:");

const testCases = [0, 1, 5, 7, 10, "12", "invalid"];
testCases.forEach((test, index) => {
    console.log(`Test ${index + 1}: fibonacci(${test}) =`, fibonacci(test));
});
