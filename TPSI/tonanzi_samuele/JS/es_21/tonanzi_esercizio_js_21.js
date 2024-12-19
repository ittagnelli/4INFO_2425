function op(a,b,callback){
    return callback(a,b);
}

function somma(a,b){
    return a+b ;
}
function moltiplicazione(a,b){
    return a * b ;
}
function potenza(a,b){
    return Math.pow(a,b);
} 

function main(){
    console.log(op(2,3,somma));
    console.log(op(4,5,moltiplicazione));
    console.log(op(5,2,potenza));
}
main();