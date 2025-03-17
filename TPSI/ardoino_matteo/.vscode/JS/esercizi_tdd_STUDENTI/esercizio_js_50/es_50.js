function Primo(num) {
    if (num === 1) return true;  
    if (num < 2) return false;   
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function ordinaNumeriPrimi(array) {
    const numeriPrimi = array.filter(èPrimo);
    const altriNumeri = array.filter(num => !Primo(num));
    return [...numeriPrimi, ...altriNumeri];
  }
  