function calcolo_somma(n){
    let somma = 0;
    for(i = 0; i < n; i++){
        somma += i;
    }
    console.log(`la somma dei numeri compresi tra 0 e ${n} è ${somma}`);
}


function main(){
    let n1 = 3;
    let n2 = 5;
    let n3 = 7;

    calcolo_somma(n1);
    calcolo_somma(n2);
    calcolo_somma(n3);
}

main()