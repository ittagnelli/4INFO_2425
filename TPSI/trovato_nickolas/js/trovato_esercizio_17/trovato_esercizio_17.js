function maggiore(a, b) {
    return a > b ? a : b;
}

console.log("Risultato funzione maggiore:");

const testCases = [
    { num1: 3, num2: 5 },
    { num1: 10, num2: 7 },
    { num1: -1, num2: -5 }
];

testCases.forEach((test, index) => {
    console.log(`Test ${index + 1}: maggiore(${test.num1}, ${test.num2}) =`, maggiore(test.num1, test.num2));
});
