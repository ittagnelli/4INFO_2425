function temp(ore, minuti, secondi) {
    this.ore = ore;
    this.minuti = minuti;
    this.secondi = secondi;
  }
  
  function ora() {
    let tempo1 = new tempo(6, 2, 3);
    let tempo2 = new tempo(3, 2, 6);
    let tempo3 = new tempo(5, 3, 5);
    let tempo1_cmp = tempo1.ore * 3600 + tempo1.minuti * 60 + tempo1.secondi;
    let tempo2_cmp = tempo2.ore * 3600 + tempo2.minuti * 60 + tempo2.secondi;
    let tempo3_cmp = tempo3.ore * 3600 + tempo3.minuti * 60 + tempo3.secondi;
  
    let z = Math.min(tempo1_finale, tempo2_finale, tempo3_finale);
  
    console.log(tempo1_cmp);
    console.log(tempo2_cmp);
    console.log(tempo3_cmp);
  }
  
  console.log(calcolo_ora());