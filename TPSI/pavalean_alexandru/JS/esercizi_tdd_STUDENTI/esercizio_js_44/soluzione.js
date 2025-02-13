export const ordina = (l) => {
    //INSERISCI QUI IL TUO CODICE
    let ordinati_per_titolo = l.sort((s1, s2) => s1.title - s2.title)
    return ordinati_per_titolo;
};
