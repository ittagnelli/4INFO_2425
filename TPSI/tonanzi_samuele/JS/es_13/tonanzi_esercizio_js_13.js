function stampa(n){
    console.log(`somma numeri fino a ${n} è: `, somma(n));
}

function somma(n){
    let s = 0;

    for(let i = 0; i <= n; i++){
        s += i;
    }

    return s;
}



function main(){

    stampa(6);
    stampa('12');
    stampa(0);

}

main();