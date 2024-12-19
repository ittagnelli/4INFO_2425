let somma = (a, b) =>  console.log(`L'addizione tra ${a} e ${b} fa: ${a + b}`)
    let sottrazione = (a, b) =>  console.log(`La sottrazione tra ${a} e ${b} fa: ${a - b}`)
    let moltiplicazione = (a, b) =>  console.log(`La moltiplicazione tra ${a} e ${b} fa: ${a * b}`)
    let divisione = (a, b) =>  console.log(`La divisone tra ${a} e ${b} fa: ${a / b}`)
    
    function main(){
        somma(10, 30);
        sottrazione(40, 23);
        moltiplicazione(5, 25);
        divisione(9, 1);
    }
    
    main()