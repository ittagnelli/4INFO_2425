function stampa(n){
    console.log(`${n} corrisponde al numero: ${fibonacci(n)} della sequenza di fibonacci `);
}

function fibonacci(n){
    if(n <= 1){
        return n;
    }else{
        return fibonacci(n - 1) + fibonacci(n - 2) ;
    }  
}

function main(){    
    stampa(10);
    stampa('10');
    stampa(20);
    stampa('20');
    stampa(35);
}  


main();
