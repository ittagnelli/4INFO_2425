function CalcolaMaggiore(a,b){
    return a > b ? a : b;
}

function main(){
    let n1 = 5;
    let n2 = 8;
    let n3 = 7;
    let n4 = 10;
    let n5 = 20;
    let n6 = 30;
    let risultato1 = CalcolaMaggiore(n1,n2);
    console.log(`il numero maggiore è ${risultato1}`);
    let risultato2 = CalcolaMaggiore(n3,n4);
    console.log(`il numero maggiore è ${risultato2}`);
    let risultato3 = CalcolaMaggiore(n5,n6);
    console.log(`il numero maggiore è ${risultato3}`);


}

main()