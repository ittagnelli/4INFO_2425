function stampa(n){
    console.log(`la somma dei numeri fino a ${n} è: `, somma(n));
}

function somma(n){
    let s = 0;

    for(let i = 0; i <= n; i++){
        s += i;
    }

    return s;
}



function main(){

    stampa(5);
    stampa('10');
    stampa(0);
    
}

main();