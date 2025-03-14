export const gen_arr = (len) => {
    //INSERISCI QUI IL TUO CODICE
    let array1 = Array(len).fill().map(() => Math.floor(Math.random() * 100));  
    let copia = Array.from(array1); 
    let array2 = copia.reverse(); 
    return [array1,array2];
};