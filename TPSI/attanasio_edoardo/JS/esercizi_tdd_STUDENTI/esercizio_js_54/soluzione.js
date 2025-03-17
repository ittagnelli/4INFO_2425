export const gen_arr = (len) => {
    //INSERISCI QUI IL TUO CODICE
    let array = Array(len).fill(Math.floor(Math.random()*100))
    return [array, [...array.reverse()]];
};