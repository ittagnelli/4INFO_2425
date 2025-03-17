function contaParole(text) {
    return text
      .toLowerCase()
      .split(' ')
      .map(parola => {
        let parolaPulita = '';
        for (let i = 0; i < parola.length; i++) {
          const char = parola[i];
          if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            parolaPulita += char;
          }
        }
        return parolaPulita;
      })
      .filter(parola => parola.length > 0)  
      .reduce((mappa, parola) => mappa.set(parola, (mappa.get(parola) || 0) + 1), new Map()); 
  }
  