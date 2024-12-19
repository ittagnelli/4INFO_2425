function maggiore(n1, n2, n3){
    return parseInt(n1) < parseInt(n2) && parseInt(n2) > parseInt(n3) ? "Secondo numero è il più grande" : parseInt(n1) > parseInt(n2) && parseInt(n1) > parseInt(n3) ? "Il primo numero è il più grande" : "Il terzo numero è il più grande"
}

function main(){
    console.log(maggiore(30, 40, 20));
    console.log(maggiore(2, 3, 4));
    console.log(maggiore("10", 2, "5"));
}

main()