function CalcolaMaggiore(a, b, c){
    return a > b && a > c  ? a : (b > c ? b : c);
}

function main(){
    let n1 = 5;
    let n2 = 8;
    let n3 = 7;
    let n4 = 10;
    let n5 = 20;
    let n6 = 30;
    let n7 = 10;
    let n8 = 15;
    let n9 = 16;
    let risultato1 = CalcolaMaggiore(n1,n2,n3);
    console.log(`il numero maggiore è ${risultato1}`);
    let risultato2 = CalcolaMaggiore(n4,n5,n6);
    console.log(`il numero maggiore è ${risultato2}`);
    let risultato3 = CalcolaMaggiore(n7,n8,n9);
    console.log(`il numero maggiore è ${risultato3}`);


}

main()