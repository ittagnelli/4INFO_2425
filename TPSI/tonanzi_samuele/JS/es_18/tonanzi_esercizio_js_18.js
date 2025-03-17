function magg(n,n1,n2){
    return n > n1 ? (n > n2 ? n : n2) : (n1 > n2 ? n1 : n2);
}
function main(){
console.log(`il maggiore è: ${magg(2,200,36)}`);
}
main();