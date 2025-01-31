const table = document.getElementById("paghe");

function aggiungi_persona(){
let dip = document.getElementById("dipartimento").value;
let cog = document.getElementById("cognome").value;
let nom = document.getElementById("nome").value;
let mon = document.getElementById("mese").value;
let imp = document.getElementById("importo").value;

if(dip != "" && cog != "" && nom != "" && mon != "" && imp != ""){
    let rif = document.getElementById("rif");
    let row = document.createElement("tr");
    let tddip = document.createElement("td");
    let tdcog = document.createElement("td");
    let tdnom = document.createElement("td");
    let tdmon = document.createElement("td");
    let tdimp = document.createElement("td");
    tdimp.classList.add("imp");

    tddip.innerText=dip;
    tdcog.innerText=cog;
    tdnom.innerText=nom;
    tdmon.innerText=mon;
    tdimp.innerText=imp;
    rif.after(row);
    row.append(tddip,tdcog,tdnom,tdmon,tdimp);

    
}
else{
    alert("tutti i campi devono essere riempiti! ! ");
}
}

function totale(){
    let row = document.getElementsByTagName("tr");

    let totale = 0;
    let Nrow = 0;
    for(i=2;i < row.length;i++){
        const rows = row[i];
        const importo = rows.getElementsByTagName("td")[4];
        if (importo) {
            const imp = parseFloat(importo.innerText.replace("€",""))
            totale += imp
            Nrow ++;
        }
    }

    const divtot = document.getElementById("totale");
    if (divtot) {
        divtot.innerText = totale + " €";
    }
    return {totale, Nrow};
}
function media(){
    const risultatotot = totale();
    let media = risultatotot.totale /risultatotot.Nrow;
    let divmed = document.getElementById("media");
    divmed.innerText = media + " €";
}
