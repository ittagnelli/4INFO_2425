function trovaMaggiore(a, b) {
    let massimo = a > b ? a : b;
    return massimo;
  }
  
  function operazionePrincipale(valore1, valore2, funzioneCallback) {
    const messaggio = "Esecuzione dell'operazione...";
    console.log(messaggio);
    let risultato = funzioneCallback(valore1, valore2);
    return risultato;
  }
  
  function sommaNumeri(num1, num2) {
    let somma = num1 + num2;
    return somma;
  }
  
  // Uso della callback
  console.log(operazionePrincipale(1, 2, sommaNumeri));
  console.log(operazionePrincipale(3, 4, sommaNumeri));
  console.log(operazionePrincipale(10, 20, sommaNumeri));
  