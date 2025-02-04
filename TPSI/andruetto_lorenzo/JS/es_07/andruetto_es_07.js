function clearInput(){
    document.getElementById("cognome").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("indirizzo").value = "";
    document.getElementById("telefono").value = "";
}

function aggiungi_contatto(){
    // variables
    const tabella = document.getElementById("tabella");
    let cognome = document.getElementById("cognome").value;
    let nome = document.getElementById("nome").value;
    let indirizzo = document.getElementById("indirizzo").value;
    let telefono = document.getElementById("telefono").value;
    let button = document.createElement("button");

    if(cognome != "" && nome != "" && indirizzo != "" && telefono != ""){
        let tr = document.createElement("tr");
        let sur = document.createElement("td");
        let name = document.createElement("td");
        let address = document.createElement("td");
        let phone = document.createElement("td");
        let tdbutton = document.createElement("td");
        sur.innerText = cognome;
        name.innerText = nome;
        address.innerText = indirizzo;
        phone.innerText = telefono;
        button.innerText = "Rimuovi";
        
        clearInput();
        button.addEventListener('click', function(){
            rimuovi_contatto(tr);
        })
        tdbutton.append(button);
        tr.append(sur, name, address, phone, tdbutton);
        tabella.append(tr);
    }
    else{
        alert("Tutti i campi devono essere riempiti.");
    }
}

function rimuovi_contatto(tr){
    const tabella = document.getElementById("tabella");
    tabella.removeChild(tr);
}

function cerca_contatto(){

    let cognome = document.getElementById("cognome").value;
    let telefono = document.getElementById("telefono").value;

    let tabella = document.getElementById("tabella")
    let righe = tabella.getElementsByTagName("tr");
    let updateButton = document.getElementById("aggiorna-button");
    let trovato = false;

    if(cognome != "" || telefono == ""){

        for(let i = 1; i < righe.length; i++){
            const tdCognome = righe[i].getElementsByTagName("td")[0];

            if(tdCognome.innerText === cognome){
                const tdNome = righe[i].getElementsByTagName("td")[1];
                const tdIndirizzo = righe[i].getElementsByTagName("td")[2];
                const tdTelefono = righe[i].getElementsByTagName("td")[3];

                let nome = document.getElementById("nome");
                let indirizzo = document.getElementById("indirizzo");
                let telefono = document.getElementById("telefono");

                nome.value = tdNome.innerText;
                indirizzo.value = tdIndirizzo.innerText;
                telefono.value = tdTelefono.innerText;

                trovato = true;
                break;
            }

            updateButton.addEventListener('click', aggiorna(righe[i].getElementsByTagName("td")))
        }
    } else if(cognome == "" && telefono != ""){

        for(let i = 1; i < righe.length; i++){
            const tdTelefono = righe[i].getElementsByTagName("td")[3];

            if(tdTelefono.innerText === telefono){

                const tdCognome = righe[i].getElementsByTagName("td")[0];
                const tdNome = righe[i].getElementsByTagName("td")[1];
                const tdIndirizzo = righe[i].getElementsByTagName("td")[2];

                let cognome = document.getElementById("cognome");
                let nome = document.getElementById("nome");
                let indirizzo = document.getElementById("indirizzo");


                nome.value = tdNome.innerText;
                indirizzo.value = tdIndirizzo.innerText;
                cognome.value = tdCognome.innerText;

                trovato = true;
                break;
            }

            updateButton.addEventListener('click', aggiorna(righe[i].getElementsByTagName("td")))
        }
    }

    else{
        alert("ERRORE: è possibile effettuare la ricerca unicamente tramite cognome o numero di telefono");
    }

    if(!trovato){
        alert("non è stata trovata nessuna corrispondenza");
    }
}

function aggiorna(celle){
    celle[0].innerText = document.getElementById("cognome").value;
    celle[1].innerText = document.getElementById("nome").value;
    celle[2].innerText = document.getElementById("indirizzo").value;
    celle[3].innerText = document.getElementById("telefono").value;
}