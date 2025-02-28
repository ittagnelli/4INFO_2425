function calcolaDifferenza(orario1, orario2) {
    let Orario1 = (orario1.h * 3600000) + (orario1.m * 60000) + (orario1.s * 1000);
    let Orario2 = (orario2.h * 3600000) + (orario2.m * 60000) + (orario2.s * 1000);

    let differenzaMilli = Orario2 - Orario1;

    let differenzaSec = differenzaMilli / 1000;
    let differenzaMin = differenzaMilli / 60000;
    let differenzaOre = differenzaMilli / 3600000;

    return {
        millisecondi: differenzaMilli,
        secondi: differenzaSec,
        minuti: differenzaMin,
        ore: differenzaOre
    };
}

function main() {
    const orario1 = { h: 1, m: 30, s: 15 };
    const orario2 = { h: 3, m: 45, s: 50 };

    let differenza = calcolaDifferenza(orario1, orario2);

    console.log(`La differenza in millisecondi: ${differenza.millisecondi}`);
    console.log(`La differenza in secondi è: ${differenza.secondi}`);
    console.log(`La differenza in minuti è: ${differenza.minuti}`);
    console.log(`La differenza in ore è: ${differenza.ore}`);
}

main();