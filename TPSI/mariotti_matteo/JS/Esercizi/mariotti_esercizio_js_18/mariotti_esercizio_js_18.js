function maggiore(n1, n2, n3) {
    let val1 = n1 > n2 ? n1 : n2
    let maggiore = val1 > n3 ? val1 : n3
return maggiore;
}

function main(){
let max = 10
for(i = 0; i < 4; i++){
let n1 = Math.floor(Math.random() * max)
let n2 = Math.floor(Math.random()* max)
let n3 = Math.floor(Math.random()* max)
console.log("Valore n1: ", n1, "Valore n2: ", n2, "Valore n3: ", n3)
let val_magg = maggiore(n1, n2, n3)
console.log("Valore maggiore: ", val_magg, "\n\n")
}
}

main()