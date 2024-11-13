function aggiungi(){
    let tabella = document.getElementById("tabella");
    let last_tr = document.getElementById("ultimo_elemento")
    let dipartimento = document.getElementById("dipartimento");
    let cognome = document.getElementById("cognome");
    let nome = document.getElementById("nome");
    let mese = document.getElementById("mese");
    let importo = document.getElementById("importo");

    if (dipartimento.value == "" || cognome.value == "" || nome.value == "" || importo.value == ""){
        alert("Compilare tutti i campi!!!");
    }
    else{

        let tr = document.createElement("tr");

        let td_dipartimento = document.createElement("td");
        td_dipartimento.innerText = dipartimento.value;

        let td_cognome = document.createElement("td");
        td_cognome.innerText = cognome.value;

        let td_nome = document.createElement("td");
        td_nome.innerText = nome.value;

        let td_mese = document.createElement("td");
        td_mese.innerText = mese.value;

        let td_importo = document.createElement("td");
        td_importo.innerText = importo.value + " €";
        td_importo.classList.add("importo");

        tr.append(td_dipartimento,td_cognome,td_nome,td_mese,td_importo);
        last_tr.after(last_tr,tr)
        

        dipartimento.value = "";
        cognome.value = "";
        nome.value = "";
        mese.value = "";
        importo.value = "";
    }


}

function sommatoria(){
    let tabella = document.getElementById("tabella");
    let tr_colspan1 = document.createElement("tr");
    let tr_totale = document.createElement("tr");
    let tr_colspan2 = document.createElement("tr");


    let td_colspan1 = document.createElement("td");
    let riga1 = document.createElement("hr")
    td_colspan1.colSpan = 5;
    
    td_colspan1.append(riga1);
    tr_colspan1.append(td_colspan1);
    tabella.append(tr_colspan1);

    let td_totale = document.createElement("td");
    let td_importo = document.createElement("td");
    td_totale.colSpan = 4;
    td_totale.innerText = "TOTALE";

    tr_totale.append(td_totale,td_importo);
    tabella.append(tr_totale);

    let td_colspan2 = document.createElement("td");
    let riga2 = document.createElement("hr")
    td_colspan2.colSpan = 5;

    td_colspan2.append(riga2);
    tr_colspan2.append(td_colspan2);
    tabella.append(tr_colspan2);
}