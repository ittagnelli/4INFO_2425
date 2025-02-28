export const psw_gen = (len) => {
    //INSERISCI QUI IL TUO CODICE
    let caratteri = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let a = new Array(len).fill(0)
    return a.map(() => char[Math.floor(Math.random() * char.length)])
};