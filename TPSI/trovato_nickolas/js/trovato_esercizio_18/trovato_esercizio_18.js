function maggioreTre(a, b, c) {
    return a > b 
        ? (a > c ? a : c) 
        : (b > c ? b : c);
}

console.log("Risultato funzione maggiore di tre numeri:");

const testCases = [
    { num1: 3, num2: 5, num3: 2 },
    { num1: 10, num2: 7, num3: 15 },
    { num1: -1, num2: -5, num3: -3 }
];

testCases.forEach((test, index) => {
    console.log(`Test ${index + 1}: maggioreTre(${test.num1}, ${test.num2}, ${test.num3}) =`, 
                maggioreTre(test.num1, test.num2, test.num3));
});
