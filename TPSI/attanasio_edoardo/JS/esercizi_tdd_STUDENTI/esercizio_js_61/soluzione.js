export function count_occurence(text) {
   //INSERISCI QUI IL TUO CODICE
//    const words = text.toLowerCase().split(' ').map(w => w.split('').filter(c => (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')).join('')).filter(w => w);
//    const map = new Map();
   
//    for (let word of words) {
//        map.set(word, (map.get(word) || 0) + 1);
//    }
//    return map;

    let atext = text.toLowerCase().split('')
    let occorrenze = new Map()

    atext.forEach(parola => {
        if(occorrenze.has(parola)){
            occorrenze.set(parola, occorrenze.get(parola) + 1)
        }else{
            occorrenze.set(parola, 1)
        }
    });
    return occorrenze;
}
