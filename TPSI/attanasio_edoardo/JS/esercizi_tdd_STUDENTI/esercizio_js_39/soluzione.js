export const reverse = (l) => {
    //INSERISCI QUI IL TUO CODICE

    let out = []
    let sum = 0
    l.forEach((item, index) => {
        out.unshift(item)
        sum += item
    });
    out.unshift(sum)
    return out
};