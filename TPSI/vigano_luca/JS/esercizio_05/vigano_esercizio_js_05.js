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

function studenti_colora(){
    const tabella = document.getElementById("lista");
    const linee = tabella.children;

    for(let i = 0; i < linee.length; i++){
        const linea = linee[i];
        if(i % 2 == 0){
        linea.style.color = "blue"
        }
        else{
        linea.style.color = "red"    
        }
    }
}