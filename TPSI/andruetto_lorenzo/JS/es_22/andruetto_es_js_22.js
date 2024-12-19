let somma = (a, b) => console.log(+a + +b);
let sub = (a, b) => console.log(+a < +b ? +b - +a : +a - +b);
let mul = (a, b) => console.log(+a * +b);
let div = (a, b) => console.log(+a / +b);

function main(){
    somma('3', 2);
    somma('1', '5');
    sub(3, 9);
    sub(4, '1');
    mul(4, 4);
    mul(-2, -7);
    div(5, 1);
    div(20, 4);
}

main();