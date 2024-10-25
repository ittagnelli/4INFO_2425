// Appunti da spiegazione

function cerca(){
console.log("Cerca va")
}

function salva(){
    console.log("Salva va")

    if(
        !getCognomeValue()||
        !getNomeValue() ||
        !getIndirizzoValue() ||
        !getTelefonoValue() 
    ){
        alert("Per cortesia riempi tutti i campo")
    }else{
        let tabella = document.getElementById("tab")
        let tr = document.createElement("tr")

    }

}

function aggiorna(){
    console.log("Aggiorna va")

}

let uid = Date.now();
tr.setAttribute("data-row-id", uid);

e.target // Dove é stato premuto 