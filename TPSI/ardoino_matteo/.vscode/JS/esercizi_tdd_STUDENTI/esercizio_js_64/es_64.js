function contaVocali(str) {
    const vocali = new Set(['a', 'e', 'i', 'o', 'u']);  
    const mappaOccorrenze = new Map();
  
    for (let char of str.toLowerCase()) {
      if (vocali.has(char)) {
        mappaOccorrenze.set(char, (mappaOccorrenze.get(char) || 0) + 1);
      }
    }
  
    return mappaOccorrenze;
  }
  