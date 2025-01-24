
function maggiore(n1, n2, n3){
    n1 > n2 && n1 > n3 ? console.log(n1) : n2 > n1 && n2 > n3 ? console.log(n2) : console.log(n3)
}

function main(){
    let n1 = 10;
    let n2 = 3;
    let n3 = 20;

    maggiore(n1, n2, n3);
}  


main();