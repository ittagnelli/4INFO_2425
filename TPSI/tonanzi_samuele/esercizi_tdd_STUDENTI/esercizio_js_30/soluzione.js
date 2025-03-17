export const tronca = (str, l) => {
    //INSERISCI QUI IL TUO CODICE
    return str.length < l ? str : str.slice(0, l) + '...';   
}
