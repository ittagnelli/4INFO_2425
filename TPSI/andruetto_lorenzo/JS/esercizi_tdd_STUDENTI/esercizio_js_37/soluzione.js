export const rm_string = (s, r) => {
    //INSERISCI QUI IL TUO CODICE
    return s.replace(new RegExp(r + '\\s*'), '').trim();
};