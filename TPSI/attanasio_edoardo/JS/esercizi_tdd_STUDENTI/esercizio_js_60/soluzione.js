export function is_anagram(arr) {
    //INSERISCI QUI IL TUO CODICE
    // arr.forEach(item => {
    //     arr.forEach(item2 => {
    //         let si = item.length == item2.length ? true : false
    //     });
    // });
    // console.log(new Set(arr.map(parola => parola.split('').sort().join(''))))
    // return [...new Set(arr.map(parola => arr.map(parola2 => {
    //     // console.log(new Set(parola).values());
    //     // console.log(new Set(parola2).values());
    //     parola.split('').sort() === parola2.split('').sort() ? parola2 : null;
    // })))];
    const gruppiParole = arr.reduce((acc, parola) => {
        const chiave = [...parola].sort().join('');
        acc.set(chiave, (acc.get(chiave) || []).concat(parola));
        return acc;
    }, new Map());
    // console.log(arr.filter(parola => 
    //     console.log(gruppiParole.get([...parola].sort().join('')).length)
    //     //gruppiParole.get([...parola].sort().join(''))
    // ))
    return arr.filter(parola => gruppiParole.get([...parola].sort().join(''))[gruppiParole.get([...parola].sort().join('')).length - 1])
}  
