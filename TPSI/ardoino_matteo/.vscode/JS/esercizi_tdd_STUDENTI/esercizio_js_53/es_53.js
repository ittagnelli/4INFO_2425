function invertiSottoArray(array, M) {
    const primaParte = array.slice(0, M + 1); 
    const secondaParte = array.slice(M + 1);  
    const primaParteInvertita = primaParte.reverse();
    const secondaParteInvertita = secondaParte.reverse();
    return secondaParteInvertita.concat(primaParteInvertita);
  }
    