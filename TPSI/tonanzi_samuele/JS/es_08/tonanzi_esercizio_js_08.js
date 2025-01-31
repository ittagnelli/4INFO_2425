function aggiunta() {
    const table = document.getElementById("tab");

    let dafare = document.getElementById("todo").value; 
    let importanza = document.getElementById("livello").value;

    let tr = document.createElement("tr");

    if(activity != ""){
   let attivita = document.createElement("td");
    attivita.innerText = dafare; 
    const cimportanza = document.createElement("td");
    const iimportanza = document.createElement("i");

    switch (importanza) {
        case "bassa":
            iimportanza.className = "fas fa-arrow-down"; 
            iimportanza.style.color = "green";
            break;
        case "media":
            iimportanza.className = "fas fa-arrow-right"; 
            iimportanza.style.color = "yellow";
            break;
        case "alta":
            iimportanza.className = "fas fa-arrow-up"; 
            iimportanza.style.color = "red";
            break;
    }

    cimportanza.appendChild(iimportanza);

    const complete = document.createElement("td");
    const icompletato = document.createElement("i");
    icompletato.className = "fas fa-check";
    icompletato.style.cursor = "pointer"; 
    icon = true

    icompletato.addEventListener("click", function(){
        tdActivityName.classList.toggle("sbarrato");
        console.log(tdActivityName.classList);
        icompletato.classList.toggle("blu");
    });

    complete.appendChild(icompletato);


    const cancella = document.createElement("td");
    const icancella = document.createElement("i");
    icancella.className = "fas fa-trash"; 
    icancella.style.cursor = "pointer";
    icancella.addEventListener("click", function() {
        tr.remove(); 
    });
    cancella.appendChild(icancella);

    tr.append(tdActivityName, cimportanza, complete, cancella);

    table.appendChild(tr);

    document.getElementById("attivita").value = "";
}else{
    alert("Il campo attivita è vuoto")
}
}