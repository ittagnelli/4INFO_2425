function def(n1, n2, callback) {


    return callback(n1, n2);

}

function main() {
    const s = (n1, n2) => n1 + n2;
    const moltipli = (n1, n2) => n1 * n2;
    const p = (n1, n2) => n1 ** n2;

    
    console.log(def(9, 2, s)); 
    console.log(def(5, 12, moltipli)); 
    console.log(def(5, 4, p));
}

main();