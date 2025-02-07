function differenza(primo, secondo){
    let msPrimo = (primo.h * 3600 + primo.m * 60 + primo.s) * 1000;
    let msSecondo = (secondo.h * 3600 + secondo.m * 60 + secondo.s) * 1000;


    let differenzaMs = Math.abs(msPrimo - msSecondo);

    let differenzaSec = differenzaMs / 1000;
    let differenzaMin = differenzaSec / 60;
    let differenzaOre = differenzaMin / 60;

    return{
        ms: differenzaMs,
        sec: differenzaSec,
        min: differenzaMin,
        ore: differenzaOre
    };
    
}


function main(){
    const primo = {
        h: 10,
        m: 20,
        s: 30
    };

    const secondo = {
        h: 22,
        m: 10,
        s: 50
    };   
    
    const terzo = {
        h: 0,
        m: 0,
        s: 0
    };

    const quarto = {
        h: 2,
        m: 44,
        s: 27
    };    


    let ris1 = differenza(primo, secondo);
    console.log(`Differenza tra ${primo.h}h ${primo.m}m ${primo.s}s e ${secondo.h}h ${secondo.m}m ${secondo.s}s è: 
                ${ris1.ms}ms, ${ris1.sec}s, ${ris1.min}min, ${ris1.ore}ore`);

    let ris2 = differenza(terzo, quarto);
        console.log(`Differenza tra ${terzo.h}h ${terzo.m}m ${terzo.s}s e ${quarto.h}h ${quarto.m}m ${quarto.s}s è: 
        ${ris2.ms}ms, ${ris2.sec}s, ${ris2.min}min, ${ris2.ore}ore`);
}


main();