let somma = (a, b) =>  console.log(`la somma tra: ${a} e ${b} è: ${a + b}
---`)
let sottrazione = (a, b) =>  console.log(`la differenza tra: ${a} e ${b} è: ${a - b}
---`)
let moltiplicazione = (a, b) =>  console.log(`il prodotto tra: ${a} e ${b} è: ${a * b}
---`)
let divisione = (a, b) =>  console.log(`il quoziente tra: ${a} e ${b} è: ${a / b}
---`)

function main(){
    somma(2, 3);
    somma(5, 7);
    sottrazione(8, 2);
    sottrazione(10, 7);
    moltiplicazione(5, 3);
    moltiplicazione(2, 8);
    divisione(6, 3);
    divisione(10, 2);
}

main()
