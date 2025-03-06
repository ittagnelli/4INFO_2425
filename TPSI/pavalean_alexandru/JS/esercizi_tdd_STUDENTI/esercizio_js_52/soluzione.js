export const psw_gen = (len) => {
    //INSERISCI QUI IL TUO CODICE
    return Array(len).fill(null).map(() => 'romania'[Math.floor(Math.random() * 7)]);
};