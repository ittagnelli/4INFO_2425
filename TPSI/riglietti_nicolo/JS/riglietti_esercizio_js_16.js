function minore(primo, secondo, terzo){

    let msPrimo = (primo.h * 3600 + primo.m * 60 + primo.s) * 1000;
    let msSecondo = (secondo.h * 3600 + secondo.m * 60 + secondo.s) * 1000;
    let msTerzo = (terzo.h * 3600 + terzo.m * 60 + terzo.s) * 1000;

    console.log("orari in millisecondi: ", msPrimo, msSecondo, msTerzo)

    if(msPrimo < msSecondo && msPrimo < msTerzo){
        console.log("il più piccolo è: ", msPrimo);
    } else if(msSecondo < msPrimo && msSecondo < msTerzo){
        console.log("il più piccolo è: ", msSecondo);
    } else{
        console.log("il più piccolo è: ", msTerzo);
    }
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
        h: 2,
        m: 44,
        s: 27
    };   

    minore(primo, secondo, terzo);
}


main()