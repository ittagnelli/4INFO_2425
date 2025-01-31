function somma(num) {
    num = parseInt(num);
    let compresi = [];

    for(let i = 1; i < num; i++) {
        compresi.push(i);
    }
    return compresi.reduce((sum, numero) => sum + numero);
}

function main() {
    console.log(somma(4))
    console.log(somma('4'))
    console.log(somma(20))
}

main()
