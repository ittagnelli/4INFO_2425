function fun(n1,n2,n3) {
    return n1 > n2 ? (n1 > n3 ? n1 : n3) : (n2 > n3 ? n2 : n3);


}

function main() {

    console.log(fun(54,78,12));
    console.log(fun(345,78,87));
    console.log(fun(234,87,986));


}

main();
