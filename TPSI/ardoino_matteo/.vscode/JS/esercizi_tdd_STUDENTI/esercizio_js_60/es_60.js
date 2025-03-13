function rimuoviAnagrammi(arr) {
    const paroleOrdinati = {};
  
    arr.forEach(parola => {
      const parolaOrdinata = parola.split('').sort().join('');
      paroleOrdinati[parolaOrdinata] = (paroleOrdinati[parolaOrdinata] || 0) + 1;
    });                                                                                         
  
    return arr.filter(parola => {
      const parolaOrdinata = parola.split('').sort().join('');
      return paroleOrdinati[parolaOrdinata] === 1;
    });
  }
  