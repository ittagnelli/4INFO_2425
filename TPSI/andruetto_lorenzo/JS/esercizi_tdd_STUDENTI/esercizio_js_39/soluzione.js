export const reverse = (l) => {
    //INSERISCI QUI IL TUO CODICE
    let newArray = new Array();
    let sum = 0;

    l.forEach((_) => {
        newArray.unshift(_);
        sum += _;
    });
    
    newArray.unshift(sum);
    return newArray;
};