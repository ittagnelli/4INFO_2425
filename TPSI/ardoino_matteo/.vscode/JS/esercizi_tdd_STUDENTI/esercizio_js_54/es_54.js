function generaArrayCasuale(N) {
    const array = [];
    
    for (let i = 0; i < N; i++) {
      array.push(Math.floor(Math.random() * 100) + 1);  
    }
  
    console.log("Array originale:", array);
  
    const arrayInvertito = [...array].reverse();  
    console.log("Array invertito:", arrayInvertito);
  }
  

  