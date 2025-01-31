function add_studente() {
    const table = document.getElementById("tab"); //prevelo l'oggetto <ul> dal DOM tramite id
    const tr = document.createElement("tr");
    const cognome_str = document.getElementById("cognome").value; 
    const voto_str = document.getElementById("numero").value;
    const td1 = document.createElement("td"); 
    const td2 = document.createElement("td"); 
    td1.innerText = cognome_str;
    td2.innerText = voto_str;
    table.append(tr)
    tr.append(td1);
    tr.append(td2);
  }

function color(){
    const table = document.getElementById("tab");
    const trs = table.children;
    for(var i = 0; i < trs.lenght; i++){
        var tr = trs[i];
        tr.classList.add("blue");
    }
}

function grass(){
    const table = document.getElementById("tab");
    const trs = table.children;
    for(var i = 0; i < trs.lenght; i++){
        var tr = trs[i];
        tr.classList.add("grass");
    }
}

function border(){
    const table = document.getElementById("tab");
    table.classList.toggle("border");
}