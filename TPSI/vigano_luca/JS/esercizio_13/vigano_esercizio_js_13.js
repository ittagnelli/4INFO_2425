function somma(number){
    let s = 0;
    for(let i = 0; i < Number(number) + 1; i++){
        s += i
    }
    return s;
}

function main(){
    console.log(somma(10));
    console.log(somma("10"));
    console.log(somma(5));
}

main();