export const map_arr = (l, n) => {
    //INSERISCI QUI IL TUO CODICE
    let newArray = new Array();
    l.forEach(element => element % n == 0 ? newArray.push(0) : newArray.push(element));
    return newArray;
};
