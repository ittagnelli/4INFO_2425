export const reverse = (l) => {
    let risultato = new Array(l.length);
    let somma = 0;
    
    // Calcoliamo la somma di tutti gli elementi
    l.forEach((element) => {
        somma += element;
    });
    
    // Riempire l'array invertito
    l.forEach((element, index) => {
        risultato[l.length - index] = element;
    });
    
    // Inserire la somma come primo elemento
    risultato[0] = somma;
    
    return risultato;


    //const l_reverso = l.map((_, index, arr) => arr[arr.length - 1 - index]);
    //let somma = l.reduce((acc, current) => acc + current, 0);   
    //l_reverso.unshift(somma)
    //return l_reverso
    //versione con nuova roba
};
