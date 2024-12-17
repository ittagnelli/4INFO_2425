function maggiore(num1, num2, num3) {
    return num1 > num2 
        ? (num1 > num3 ? num1 : num3) 
        : (num2 > num3 ? num2 : num3);
}
function main() {
    console.log("Risultato 1:", maggiore(8, 67, 7));    // Primo test con 5, 10, 7
    console.log("Risultato 2:", maggiore(30, 15, 25));  // Secondo test con 20, 15, 25
    console.log("Risultato 3:", maggiore(9, 9, 9));     // Terzo test con 8, 8, 8 (tutti uguali)
}
main();
