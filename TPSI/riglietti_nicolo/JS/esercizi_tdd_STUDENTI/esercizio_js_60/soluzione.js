export function is_anagram(arr) {
    const gruppiParole = arr.reduce((acc, parola) => {
        const chiave = [...parola.toLowerCase()].sort().join('');
        acc.set(chiave, parola); (acc.get(chiave) || []).concat(parola)
        return acc;
    }, new Map());
    
    return [...gruppiParole.values()]
}  

// let map = new Map
// 
//     for(let word of arr){
//         let sorted = word.toLowerCase().split('').sort().join('');
//     }
// 
//     return Array.from(map.values())