export const tronca = (str, l) => {
    //INSERISCI QUI IL TUO CODICE
    return str.length < l ? str : str.substring(0, l) + '...';
}
