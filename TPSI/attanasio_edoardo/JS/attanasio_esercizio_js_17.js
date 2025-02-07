function maggiore(numUno, numDue){
    let max = numUno > numDue ? numUno : numDue;
    if(numUno != numDue){
        return max;
    }else{
        return "uguali";
    }
}

function main(){
    console.log(maggiore(20,10));
    console.log(maggiore(10,10));
}

main();