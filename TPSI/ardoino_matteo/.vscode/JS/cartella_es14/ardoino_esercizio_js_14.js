
function calcolaDifferenza(orario1, orario2) {
    const msOrario1 = (orario1.h * 3600000) + (orario1.m * 60000) + (orario1.s * 1000);
    const msOrario2 = (orario2.h * 3600000) + (orario2.m * 60000) + (orario2.s * 1000);

    const differenzaMs = Math.abs(msOrario2 - msOrario1);

    const differenzaSec = differenzaMs / 1000;
    const differenzaMin = differenzaMs / 60000;
    const differenzaOre = differenzaMs / 3600000;

    return {
        millisecondi: differenzaMs,
        secondi: differenzaSec,
        minuti: differenzaMin,
        ore: differenzaOre
    };
}

function main() {
    const orario1 = { h: 1, m: 30, s: 15 };
    const orario2 = { h: 3, m: 45, s: 50 };

    const risultato = calcolaDifferenza(orario1, orario2);

    console.log("Differenza in millisecondi:", risultato.millisecondi);
    console.log("Differenza in secondi:", risultato.secondi);
    console.log("Differenza in minuti:", risultato.minuti);
    console.log("Differenza in ore:", risultato.ore);

    const orario3 = { h: 0, m: 10, s: 30 };
    const orario4 = { h: 2, m: 15, s: 45 };
    const risultato2 = calcolaDifferenza(orario3, orario4);

    console.log("Differenza in millisecondi:", risultato2.millisecondi);
    console.log("Differenza in secondi:", risultato2.secondi);
    console.log("Differenza in minuti:", risultato2.minuti);
    console.log("Differenza in ore:", risultato2.ore);
}

main();
