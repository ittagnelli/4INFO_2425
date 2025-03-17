export const abbreviazione = (str) => {
    //INSERISCI QUI IL TUO CODICE
    return str.split(' ')[0][0].toUpperCase() + str.split(' ')[0].slice(1) + ' ' + str.split(' ')[1][0].toUpperCase() + '.'
}

