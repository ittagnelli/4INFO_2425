function eliminaDuplicati(str) {
    const occorrenze = new Set();
    let risultato = '';
  
    for (let char of str) {
      if (!occorrenze.has(char)) {
        occorrenze.add(char);
        risultato += char;
      }
    }
  
    return risultato;
  }
  