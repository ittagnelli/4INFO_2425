function calcolaDifferenza(orario1, orario2) {
    const msOra1 = (orario1.h * 3600000) + (orario1.m * 60000) + (orario1.s * 1000);
    const msOra2 = (orario2.h * 3600000) + (orario2.m * 60000) + (orario2.s * 1000);

    const differenzaMs = Math.abs(msOra2 - msOra1);

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
    const o1 = { h: 1, m: 30, s: 15 };
    const o2 = { h: 3, m: 45, s: 50 };

    const risultato = calcolaDifferenza(o1, o2);

    console.log("Differenza in millisecondi:", risultato.millisecondi);
    console.log("Differenza in secondi:", risultato.secondi);
    console.log("Differenza in minuti:", risultato.minuti);
    console.log("Differenza in ore:", risultato.ore);

    const o3 = { h: 0, m: 10, s: 30 };
    const o4 = { h: 2, m: 15, s: 45 };
    const risultato2 = calcolaDifferenza(o3, o4);

    console.log("Differenza in millisecondi:", risultato2.millisecondi);
    console.log("Differenza in secondi:", risultato2.secondi);
    console.log("Differenza in minuti:", risultato2.minuti);
    console.log("Differenza in ore:", risultato2.ore);
}

main();
