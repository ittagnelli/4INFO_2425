function fibbonacci(x) {
    y = parseInt(x);
    n1 = 0
    n2 = 0
    s = 1
    for (let i = 0; i < x; i++) {
        n1 = n2
        n2 = s
        s = n1+n2
    }
    return s
}

console.log(fibbonacci(1))
console.log(fibbonacci(2))
console.log(fibbonacci(3))
console.log(fibbonacci(4))
console.log(fibbonacci(5))