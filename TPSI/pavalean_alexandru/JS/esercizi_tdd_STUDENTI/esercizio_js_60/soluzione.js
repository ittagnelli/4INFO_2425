export function is_anagram(arr) {
    //INSERISCI QUI IL TUO CODICE
    const gruppiParole = arr.reduce((acc, parola) => {
        const chiave = [...parola.toLowerCase()].sort().join('');
        acc.set(chiave, (acc.get(chiave) || []).concat(parola));
        return acc;
    }, new Map());
    
    return Array.from(new Set(arr.map(parola =>  gruppiParole.get([...parola.toLowerCase()].sort().join('')).length > 1 ? gruppiParole.get([...parola.toLowerCase()].sort().join('')).at(-1) : parola)));
}