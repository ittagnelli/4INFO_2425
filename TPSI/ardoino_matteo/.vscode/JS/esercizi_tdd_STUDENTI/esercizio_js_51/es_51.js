function binarioADecimale(binario) {
    let decimale = 0;
    let potenza = 0;
        [...binario].forEach(bit => {
      if (bit === '1') {
        decimale += Math.pow(2, binario.length - potenza - 1);
      }
      potenza++;
    });
  
    return decimale;
  }
  