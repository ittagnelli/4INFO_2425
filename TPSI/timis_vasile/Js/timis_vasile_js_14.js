
function diffOrari(orario1, orario2) {
    const temp1 = orario1.h * 3600000 + orario1.m * 60000 + orario1.s * 1000;
    const temp2 = orario2.h * 3600000 + orario2.m * 60000 + orario2.s * 1000;






    const differenzaMs = Math.abs(temp2 - temp1);
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



function fun() {


    const Primo = {
        h: 5,
        m: 45,
        s: 30
    };
    


    const Secondo = {
        h: 3,
        m: 50,
        s: 28
    };

    const Terzo = {
        h: 10,
        m: 25, 
        s: 15
    }; 






    const Quarto = { 
        h: 20, 
        m: 40, 
        s: 19 
    }; 







    console.log("Test 1:");

    console.log("Orario 1:", Primo);

    console.log("Orario 2:", Secondo);

    console.log("Differenza", diffOrari(Primo, Secondo));



    console.log("\nTest 2:");
    console.log("Orario 1:", Terzo);
    console.log("Orario 2:", Quarto);
    console.log("Differenza", diffOrari(Terzo, Quarto));
}

fun ();