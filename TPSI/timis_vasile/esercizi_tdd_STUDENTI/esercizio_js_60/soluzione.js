export function is_anagram(arr) {
    //INSERISCI QUI IL TUO CODICE
    let r = Array.from(new Set(arr));
    for(let item of r) {
        if (item.has())

    }

}  


 // Crea un Set per memorizzare le versioni normalizzate delle parole
 let normalizedSet = new Set();

 // Scorri l'array e aggiungi al Set ogni versione normalizzata
 for (let word of arr) {
     let normalizedWord = normalize(word);

     // Se il Set contiene già la versione normalizzata, è un anagramma
     if (normalizedSet.has(normalizedWord)) {
         return true;
     }

     // Altrimenti, aggiungi la parola normalizzata al Set
     normalizedSet.add(normalizedWord);
 }
