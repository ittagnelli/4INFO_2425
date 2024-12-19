function successioneFibonacci(n){
    let a = 0
    let b = 1
    let serie = []
    for(let i = 0; i < Number(n);i++){
        serie[i] = a;
        let aDue = a;
        a = b;
        b = aDue + b;
    }
    return serie[n - 1];
}

function main(){
    console.log(successioneFibonacci(10));
    console.log(successioneFibonacci("10"));
    console.log(successioneFibonacci(7));
    console.log(successioneFibonacci(9));
    console.log(successioneFibonacci(5));
}

main();