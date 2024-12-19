function min(n1, n2) {
    return +n1 < +n2 ? +n1 : +n2;
}

function main(){
    console.log(min('7', 9));
    console.log(min(4, '1'));
    console.log(min('5', '0'));
}

main()