
function fibonacci(number) {

    if (number <= 1) {

        return number;
    } 
    else  {

        return fibonacci(number - 1) + fibonacci(number - 2);
    }
}


    




function main() {
    console.log(fibonacci(10));
    console.log(fibonacci(9));
    console.log(fibonacci(5));
    console.log(fibonacci(3));
    console.log(fibonacci(8));
    
    
}


main();

