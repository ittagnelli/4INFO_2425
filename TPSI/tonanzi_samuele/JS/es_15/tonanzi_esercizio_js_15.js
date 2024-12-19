function print_corrispondenza(n){
    console.log(`${n} = ${fibo(n)} della successione`)
}
function fibo(n){
if(n<=1){   // se n è 0 o 1
    return n;
}
else{
    return (fibo(n-1) + fibo(n-2));
}
}
function main(){
//multipli di 7
print_corrispondenza(7);
print_corrispondenza(14);
print_corrispondenza(21);
print_corrispondenza('28');
}
main();