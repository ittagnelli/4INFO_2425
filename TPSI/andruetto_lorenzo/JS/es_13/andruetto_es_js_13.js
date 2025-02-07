function calcolo(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) sum += i
    return sum;
}

function main() {
    console.log(calcolo(5));
    console.log(calcolo(4));
    console.log(calcolo(10));
}

main();