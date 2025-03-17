export const gen_arr = (len) => {
    //INSERISCI QUI IL TUO CODICE
    let array = new Array(len).fill(Math.floor(Math.random()))
    return [array, array.reverse()];
};