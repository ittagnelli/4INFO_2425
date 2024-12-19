function callback(n1, n2, operazia) {
    return operazia == '+' ? +n1 + +n2 : operazia == '*' ? +n1 * +n2 : Number(n1) ** Number(n2);
}

function main() {
    console.log(callback("3", 2, '+'));
    console.log(callback(1, '6', '*'));
    console.log(callback(3, '4', '**'));
}

main();