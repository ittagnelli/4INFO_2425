function ultimiNElementi(array, N) {
    const risultato = [];
    for (let i = array.length - N; i < array.length; i++) {
      risultato.push(array[i]);
    }
    return risultato;
  }
  