export const avg_age = (l) => {
    let sommaEta = studenti.reduce((acc, studente) => acc + studente.eta, 0);
    return sommaEta / studenti.length;
  };
