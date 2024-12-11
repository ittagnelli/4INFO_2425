function differenzaOrari(orario1, orario2) {
    const ms1 = orario1.h * 3600000 + orario1.m * 60000 + orario1.s * 1000;
    const ms2 = orario2.h * 3600000 + orario2.m * 60000 + orario2.s * 1000;

    const differenzaMs = Math.abs(ms2 - ms1);
    const differenzaSecondi = differenzaMs / 1000;
    const differenzaMinuti = differenzaMs / (1000 * 60);
    const differenzaOre = differenzaMs / (1000 * 60 * 60);

    return {
        millisecondi: differenzaMs,
        secondi: differenzaSecondi,
        minuti: differenzaMinuti,
        ore: differenzaOre
    };
}

function main() {
    const First = {
        h: 5,
        m: 45,
        s: 30
    };

    const Second = {
        h: 3,
        m: 50,
        s: 28
    };

    const Third = {
        h: 10,
        m: 25, 
        s: 15
    }; 
    const Fourth = { 
        h: 20, 
        m: 40, 
        s: 19 
    }; 

    console.log("Test 1:");
    console.log("Orario 1:", First);
    console.log("Orario 2:", Second);
    console.log("Differenza", differenzaOrari(First, Second));


    console.log("\nTest 2:");
    console.log("Orario 1:", Third);
    console.log("Orario 2:", Fourth);
    console.log("Differenza", differenzaOrari(Third, Fourth));
}

main ();