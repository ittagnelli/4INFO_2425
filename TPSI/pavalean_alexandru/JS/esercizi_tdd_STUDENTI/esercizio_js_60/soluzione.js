export function is_anagram(arr) {
    //INSERISCI QUI IL TUO CODICE
    let rappresentazioni = {};
        arr.forEach(parola => {
            let chiave = parola.toLowerCase().split('').sort().join('');
            if (!rappresentazioni[chiave]) {
                rappresentazioni[chiave] = [];
            }
            rappresentazioni[chiave].push(parola);
        });
        return arr.filter(parola => {
            let chiave = parola.toLowerCase().split('').sort().join('');
            return rappresentazioni[chiave].length === 1;
        });
}  
