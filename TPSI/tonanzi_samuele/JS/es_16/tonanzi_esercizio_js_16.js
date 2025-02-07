function orariominore(primo, secondo, terzo){
    let milliPrimo = ((primo.ore*3600)+(primo.min*60)+(primo.sec))*1000;
    let milliSecondo = ((secondo.ore*3600)+(secondo.min*60)+(secondo.sec))*1000;
    let milliTerzo = ((terzo.ore*3600)+(terzo.min*60)+(terzo.sec))*1000;
    if(milliPrimo < milliSecondo && milliPrimo < milliTerzo){
        console.log("l'orario minore è il primo.")
    }
    else if(milliSecondo< milliPrimo && milliSecondo < milliTerzo){
        console.log("l'orario minore è il secondo");
    }
    else if (milliTerzo < milliPrimo && milliTerzo <milliSecondo){
        console.log("l'orario minore è il terzo");
    }
}
function main(){
    let Ora1 = {
        ore : 12,
        min : 25,
        sec : 31
    };
    let Ora2 = {
        ore : 14,
        min : 10,
        sec : 59
    };
    let Ora3 = {
        ore : 23,
        min : 59,
        sec : 30
    };




    orariominore(Ora1,Ora2,Ora3);
}
main(); 