// Funzione per confrontare tre oggetti orari 
function orarioMinore(orario1, orario2, orario3) { // Funzione per convertire l'orario in secondi 
    const convertiInSecondi = (orario) => { return orario.h * 3600 + orario.m * 60 + orario.s; }; // Confronta gli orari 
    const minOrario = [orario1, orario2, orario3].reduce((min, curr) => { return convertiInSecondi(curr) < convertiInSecondi(min) ? curr : min; }); return minOrario; } 
    // Funzione principale per testare la funzionalità 
    function main() {
         const orarioA = { h: 12, m: 30, s: 15 }; 
         const orarioB = { h: 10, m: 45, s: 50 }; 
         const orarioC = { h: 11, m: 0, s: 5 }; 
         const risultato1 = orarioMinore(orarioA, orarioB, orarioC); 
         console.log("Il minore tra orarioA, orarioB e orarioC è:", risultato1); 
         const orarioD = { h: 9, m: 15, s: 30 }; 
         const orarioE = { h: 9, m: 15, s: 20 }; 
         const orarioF = { h: 9, m: 15, s: 25 }; 
         const risultato2 = orarioMinore(orarioD, orarioE, orarioF); 
         console.log("Il minore tra orarioD, orarioE e orarioF è:", risultato2); } // Esegui la funzione principale main();
