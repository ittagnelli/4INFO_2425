function sommaNumeriCompresi(number){
    let s = 0;
    for(let i = 0; i < Number(number) + 1; i++){
        s += i
    }
    return s;
}

function main(){
    console.log(sommaNumeriCompresi(10));
    console.log(sommaNumeriCompresi("10"));
    console.log(sommaNumeriCompresi(5));
}

main();