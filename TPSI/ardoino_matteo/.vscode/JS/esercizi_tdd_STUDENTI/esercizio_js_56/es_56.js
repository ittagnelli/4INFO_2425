function calcolaEtaMedia(studenti) {
    const sommaEta = studenti.reduce((somma, studente) => somma + studente.eta, 0);
    const etaMedia = sommaEta / studenti.length;
    
    return etaMedia;
  }
  

  