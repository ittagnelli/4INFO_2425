function aggiungi(){
const tabella = document.getElementById("table");

let dipa = document.getElementById("dipartimenti").value;
let cognome = document.getElementById("cognome").value;
let nome = document.getElementById("nome").value;
let mese = document.getElementById("mese").value;
let impo = document.getElementById("importo").value;

let tr = document.createElement("tr");
if(dipa !="" && cognome !="" && nome !="" && mese !="" && impo !=""  ) {
    let tddipa = document.createElement("td");
    let tdcognome = document.createElement("td");
    let tdnome = document.createElement("td");
    let tdmese = document.createElement("td");
    let tdimpo = document.createElement("td");

    tddipa.innerText= dipa;
    tdcognome.innerText= cognome;
    tdnome.innerText= nome;
    tdmese.innerText= mese;
    tdimpo.innerText= impo;

    tr.append(tddipa, tdcognome, tdnome, tdmese, tdimpo)
    tabella.append(tr)
}
else {
    alert("inserisci tutti i campi")
}

}