function tempo(ore, minuti, secondi) {
  this.ore = ore;
  this.minuti = minuti;
  this.secondi = secondi;
}

function calcolo_ora() {
  let tempo1 = new tempo(1, 2, 3);
  let tempo2 = new tempo(3, 2, 1);
  let tempo3 = new tempo(2, 3, 2);

  let tempo1_finale = tempo1.ore * 3600 + tempo1.minuti * 60 + tempo1.secondi;
  let tempo2_finale = tempo2.ore * 3600 + tempo2.minuti * 60 + tempo2.secondi;
  let tempo3_finale = tempo3.ore * 3600 + tempo3.minuti * 60 + tempo3.secondi;

  let x = Math.min(tempo1_finale, tempo2_finale, tempo3_finale);

  console.log(tempo1_finale);
  console.log(tempo2_finale);
  console.log(tempo3_finale);
}

console.log(calcolo_ora());
