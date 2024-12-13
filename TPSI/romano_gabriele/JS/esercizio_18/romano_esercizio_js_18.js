function maggiore(n1, n2, n3) {
    return n1 > n2 && n1 > n3 ? n1 : n2 > n3 ? n2 : n3;
}

console.log(maggiore(3, 2, 5));
console.log(maggiore(17, 23, 12));
console.log(maggiore(10000, 3200, 1700));