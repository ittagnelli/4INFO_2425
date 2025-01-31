function salva(){

    const tabella = document.getElementById("table");
    let cognome = document.getElementById("cognome").value;
    let nome = document.getElementById("nome").value;
    let indirizzo = document.getElementById("indirizzo").value;
    let telefono = document.getElementById("telefono").value;

    if(cognome != "" && nome != "" && indirizzo != "" && telefono != ""){

        let riga = document.createElement("tr");
        let tdCognome = document.createElement("td");
        let tdNome = document.createElement("td");
        let tdIndirizzo = document.createElement("td");
        let tdTelefono = document.createElement("td");
        let col = document.createElement("td");
        let bRimuovi = document.createElement("button");


        tdCognome.innerText = cognome;
        tdNome.innerText = nome;
        tdIndirizzo.innerText = indirizzo;
        tdTelefono.innerText = telefono;

        col.classList.add("col");

        bRimuovi.innerText = "rimuovi"; 

        bRimuovi.addEventListener("click", function(){
            rimuovi(riga);
        });

        riga.append(tdCognome, tdNome, tdIndirizzo, tdTelefono, col, bRimuovi);

        tabella.append(riga);

        document.getElementById("cognome").value = "";
        document.getElementById("nome").value = "";
        document.getElementById("indirizzo").value = "";
        document.getElementById("telefono").value = "";

    } else{
        alert("ERRORE: riempiere tutti i campi");
    }
}

function rimuovi(riga){
    const tabella = document.getElementById("table");
    tabella.removeChild(riga);
}

function cerca(){

    let cognome = document.getElementById("cognome").value;
    let telefono = document.getElementById("telefono").value;

    let tabella = document.getElementById("table")
    let righe = tabella.getElementsByTagName("tr");

    let trovato = false

    if(cognome != "" && telefono == ""){

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
        }

    } else{
        alert("ERRORE: è possibile effettuare la ricerca unicamente tramite cognome o numero di telefono");
    }

    if(!trovato){
        alert("non è stata trovata nessuna corrispondenza");
    }
}


function aggiorna(){

    let tabella = document.getElementById("table")
    let righe = tabella.getElementsByTagName("tr");

    let cognome = document.getElementById("cognome").value;
    let nome = document.getElementById("nome").value;
    let indirizzo = document.getElementById("indirizzo").value;
    let telefono = document.getElementById("telefono").value;


    for(let i = 1; i < righe.length; i++){

        const tdCognome = righe[i].getElementsByTagName("td")[0];

        if(tdCognome.innerText === cognome){
            righe[i].getElementsByTagName("td")[0].innerText = cognome;
            righe[i].getElementsByTagName("td")[1].innerText = nome;
            righe[i].getElementsByTagName("td")[2].innerText = indirizzo;
            righe[i].getElementsByTagName("td")[3].innerText = telefono;

            break;
        }
    }

    document.getElementById("cognome").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("indirizzo").value = "";
    document.getElementById("telefono").value = "";

}

