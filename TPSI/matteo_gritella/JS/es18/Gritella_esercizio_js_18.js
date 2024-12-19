function calcolo(n1, n2, n3) {
    return n1 > n2 && n1 > n3 ? n1 : n2 > n3 ? n2 : n3;
}

console.log(calcolo(110, 4, 100));
console.log(calcolo(200, 406, 10));
console.log(calcolo(104, 208, 52));