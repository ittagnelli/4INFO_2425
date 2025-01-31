const somma = (a, b) => a + b;
const sottrazione = (a, b) => a - b;
const moltiplicazione = (a, b) => a * b;
const divisione = (a, b) => b == 0 ?  console.log("errore") : a / b ;
function main(){
    console.log(`somma: ${somma(2,3)}`);
    console.log(`somma: ${somma(2,15)}`);s
    
    console.log(`sottrazione: ${sottrazione(4,3)}`);
    console.log(`sottrazione: ${sottrazione(15,2)}`);
    
    console.log(`moltiplicazione: ${moltiplicazione(3,3)}`);
    console.log(`moltiplicazione: ${moltiplicazione(12,0)}`);
    
    console.log(`divisione: ${divisione(42,2)}`);
    console.log(`divisione: ${divisione(2,5)}`);
}
main();