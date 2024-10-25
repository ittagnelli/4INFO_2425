function add_contato() {
    const table = document.getElementById("tab");
    const tr = document.createElement("tr");
    const cognome_str = document.getElementById("Cognome").value; 
    const nome_str = document.getElementById("Nome").value;
    const indirizzo_str = document.getElementById("Indirizzo").value;
    const telefono_str = document.getElementById("Telefono").value;
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
    td4.innerText = telefono_str;
    td6.innerText = "Rimuovi";
    td6.addEventListener("click", function(){
        rimuovi(tr);
    });
    table.append(tr)
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);
    tr.append(td6);
  }


function rimuovi(tr){
    const tabella = document.getElementById("tab");
    tabella.removeChild(tr);
}

function cerca(){
    let cognome = document.getElementById("Cognome").value;
    let telefono = document.getElementById("Telefono").value;
    let table = document.getElementById("tab");
    let righe = table.getElementsByTagName("tr");
    let agg = document.getElementById("aggiorna");
    let cellepresenti = null;

    for (let i = 2; i < righe.length; i++) { 
        let celle = righe[i].getElementsByTagName("td"); 

        let cellSurname = celle[0].innerText; 
        let cellPhone = celle[3].innerText; 

        if (cellSurname === cognome || cellPhone === telefono) {
            document.getElementById("Cognome").value = cellSurname;
            document.getElementById("Telefono").value = cellPhone;
            document.getElementById("Nome").value = celle[1].innerText;
            document.getElementById("Indirizzo").value = celle[2].innerText;

            cellepresenti = celle;
        }else{
            alert("non presente nella lista oppure campi vuoti");
        }

    }
    agg.addEventListener("click",function(){
        aggiorna(cellepresenti);
    });
}

function aggiorna(celle){
    celle[0].innerText = document.getElementById("Cognome").value;
    celle[1].innerText = document.getElementById("Nome").value;
    celle[2].innerText = document.getElementById("Indirizzo").value;
    celle[3].innerText = document.getElementById("Telefono").value;
}