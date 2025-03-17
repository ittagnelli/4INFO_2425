export const only_upper = (s) => {
    //INSERISCI QUI IL TUO CODICE
    return s.split('').filter(item => (item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90))
};
