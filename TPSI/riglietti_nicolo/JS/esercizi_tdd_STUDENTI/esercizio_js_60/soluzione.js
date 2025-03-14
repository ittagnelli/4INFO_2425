export function is_anagram(arr) {
    const parole = arr.reduce((acc, parola) => {
        const chiave = [...parola.toLowerCase()].sort().join('');
        acc.set(chiave, (acc.get(chiave) || []).concat(parola));
        return acc;
    }, new Map());

    return Array.from(new Set(arr.map(parola =>  parole.get([...parola.toLowerCase()].sort().join('')).length > 1 ? parole.get([...parola.toLowerCase()].sort().join('')).at(-1) : parola)));
}  

// let map = new Map
// 
//     for(let word of arr){
//         let sorted = word.toLowerCase().split('').sort().join('');
//     }
// 
//     return Array.from(map.values())