export const abbreviazione = (str) => {
    //INSERISCI QUI IL TUO CODICE
    return `${str.substring(0, 1).toUpperCase()}${str.substring(1, str.indexOf(' '))} ${str.charAt(str.indexOf(' ') + 1).toUpperCase()}.`;
}

