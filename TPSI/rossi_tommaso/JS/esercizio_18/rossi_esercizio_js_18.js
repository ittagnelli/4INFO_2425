function greater(n1, n2, n3) {
    return n1 > n2 && n1 > n3 ? n1 : n2 > n3 ? n2 : n3;
}

console.log(greater(423, 2, 325));
console.log(greater(127, 233, 123));
console.log(greater(432, 232, 23));