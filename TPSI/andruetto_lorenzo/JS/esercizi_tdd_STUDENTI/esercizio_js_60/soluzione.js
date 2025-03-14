export function is_anagram(arr) {
    //INSERISCI QUI IL TUO CODICE
    let res = arr.map(element => element.toLowerCase().split('').sort().join('')).reverse();
    res = res.map((e, i) => {
        return res.indexOf(e) == i ? true : false;
    }).reverse();
    return arr.filter((_, i) => res[i]);
}
