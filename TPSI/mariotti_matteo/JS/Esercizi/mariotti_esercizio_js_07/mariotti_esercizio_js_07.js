function add_number() {
    const table = document.getElementById("tab");
    const tr = document.createElement("tr");
    const cognome_str = document.getElementById("cognome").value;
    const nome_str = document.getElementById("nome").value;
    const indirizzo_str = document.getElementById("indirizzo").value;
    const num_str = document.getElementById("numero").value;

    if(nome_str != "" && cognome_str != "" && indirizzo_str != "" && num_str != ""){
    const tr1 = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");  
    const td5 = document.createElement("td");
    const td6 = document.createElement("button");


    td5.classList.add("spazio");
    td1.innerText = cognome_str;
    td2.innerText = nome_str;
    td3.innerText = indirizzo_str;
    td4.innerText = num_str;
    td6.innerText = "Rimuovi";
    td6.addEventListener("click", function(){
        rimuovi(tr1);
    });


    table.append(tr1)
    tr1.append(td1);
    tr1.append(td2);
    tr1.append(td3);
    tr1.append(td4);
    tr1.append(td5);
    tr1.append(td6);

    }else{
       alert("Compilare tutti i campi")
    }
  }


function rimuovi(tr1){
    const tabella = document.getElementById("tab"); // NEED TO FIX THIS SHIT
    tabella.removeChild(tr1); // NEED TO FIX THIS SHIT
}


