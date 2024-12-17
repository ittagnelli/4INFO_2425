function maggiore(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
function main() {
    console.log("Risultato 1:", maggiore(5, 10));  // Primo test con 5 e 10
    console.log("Risultato 2:", maggiore(20, 15)); // Secondo test con 20 e 15
    console.log("Risultato 3:", maggiore(8, 8));   // Terzo test con 8 e 8 (uguali)
}
main();
