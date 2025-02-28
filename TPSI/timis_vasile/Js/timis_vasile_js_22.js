function def(operation, n1, n2) {
    return operation(n1, n2);




}

function main() {




    const s = (a, b) => a + b;


    const sott = (a, b) => a - b;

    const multipli = (a, b) => a * b;


    
    const div = (a, b) => b !== 0;

 
    console.log(def(s, 76, 11));     
    console.log(def(s, 65, 45));      



    console.log(def(sott, 9, 3));  
    console.log(def(sott, 43, 12)); 



    console.log(def(multipli, 2, 5));  
    console.log(def(multipli, 3, 3)); 


    console.log(def(div, 20, 2));   
    console.log(def(div, 30, 0));   
}

main();