

function maggiore(numUno, numDue, numTre){
    return numUno > numDue && numUno > numTre ? numUno : numDue > numUno && numTre ? numDue : numTre;
}

console.log(maggiore(20,45,12));
console.log(maggiore(37,2,22));
console.log(maggiore(100,256,1000));