function differenzaOrari(time1, time2) {
    const ms1 = time1.h * 3600000 + time1.m * 60000 + time1.s * 1000;
    const ms2 = time2.h * 3600000 + time2.m * 60000 + time2.s * 1000;

    const diffMs = Math.abs(ms2 - ms1); 
    const diffSec = diffMs / 1000;
    const diffMin = diffMs / (1000 * 60);
    const DiffOre = diffMs / (1000 * 60 * 60);

    return {
        millisecondi: diffMs,
        secondi: diffSec,
        minuti: diffMin,
        ore: DiffOre
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