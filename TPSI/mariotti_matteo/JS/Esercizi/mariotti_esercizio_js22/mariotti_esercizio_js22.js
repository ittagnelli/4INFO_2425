const somma = (a, b) => a + b;

const sottrai = (a, b) => a - b;

const moltiplica = (a, b) => a * b;

const dividi = (a, b) => a / b;

function main() {
    console.log(`Somma: ${somma(5, 10)}`); // 15
    console.log(`Somma: ${somma(3, 7)}`); // 10

    console.log(`Sottrai: ${sottrai(10, 4)}`); // 6
    console.log(`Sottrai: ${sottrai(20, 8)}`); // 12

    console.log(`Moltiplica: ${moltiplica(6, 7)}`); // 42
    console.log(`Moltiplica: ${moltiplica(2, 9)}`); // 18

    console.log(`Dividi: ${dividi(20, 4)}`); // 5
    console.log(`Dividi: ${dividi(100, 25)}`); // 4
};

main();
