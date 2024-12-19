function minimo(n1, n2) {
    return +n1 < +n2 ? +n1 : +n2;
}

function main(){
    console.log(minimo(7, 9));
    console.log(minimo(4, 1));
    console.log(minimo(5, 0));
}
main()