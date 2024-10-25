function add_number() {
    const table = document.getElementById("tab");
    const tr = document.createElement("tr");
    const cognome_str = document.getElementById("cognome").value;
    const nome_str = document.getElementById("nome").value;
    const indirizzo_str = document.getElementById("indirizzo").value;
    const num_str = document.getElementById("numero").value;

    if(nome_str != "" && cognome_str != "" && indirizzo_str != "" && num_str != ""){


    const tr1 = document.createElement("tr");

    const td_cognome = document.createElement("td");
    const td_nome = document.createElement("td");
    const td_indirizzo = document.createElement("td");
    const td_numero = document.createElement("td");  
    const td_spazio = document.createElement("td");
    const td_bottone = document.createElement("button");


    td_spazio.classList.add("spazio");
    td_cognome.innerText = cognome_str;
    td_nome.innerText = nome_str;
    td_indirizzo.innerText = indirizzo_str;
    td_numero.innerText = num_str;
    td_bottone.innerText = "Rimuovi";
    td_bottone.addEventListener("click", function(){
        rimuovi(tr1);
    });


    table.append(tr1)
    tr1.append(td_cognome);
    tr1.append(td_nome);
    tr1.append(td_indirizzo);
    tr1.append(td_numero);
    tr1.append(td_spazio);
    tr1.append(td_bottone);

    }else{
       alert("Compilare tutti i campi, sennò non é possibile salvare il contatto")
    }
  }


function rimuovi(tr1){ // Prendo da tr1
    const tabella = document.getElementById("tab"); // Prendo la tabella totale
    tabella.removeChild(tr1); // Rimuovo il child
}


function cerca(){ // funzione
    const table = document.getElementById("tab"); // prendo la tabella
    const tr = document.getElementsByTagName("tr");// prendo tutte le tr

    const cgn_ricer = document.getElementById("cognome").value; // prendo il valore da cercare
    const num_ricer = document.getElementById("numero").value; // prendo il valore da cercare

    let buttonAggiorna = document.getElementById("aggiorna"); // al posto di un onclick button, ma gli assegno un id e lo inserisco in modo che venga chiamato da dentro la funzione
    let tdTot = null;

    for(let i = 1; i < tr.length; i++){ // for per trovare i valori
        let td = tr[i].getElementsByTagName("td"); // prendo tutto dalla lista

        let cognome =  td[0].innerText; //prendo l'inner text di cognome
        let num_tel = td[3].innerText; //Prendo l'inner text del telefono

            if(cgn_ricer == cognome || num_ricer == num_tel){ // confronto i 2
                console.log("Trovata corrispondenza") //log di conferma
                document.getElementById("cognome").value = cognome; //prendo il value dall'ID
                document.getElementById("numero").value = num_tel; //Prendo il value dall'id
                document.getElementById("nome").value = td[1].innerText; // prendo il value dall'id
                document.getElementById("indirizzo").value = td[2].innerText; // prendo il value dall'id

                tdTot = td;
            }else{  
             //   alert("non presente nella lista oppure campi vuoti");
            }
    }

}
buttonAggiorna.addEventListener("cliczk",function(){
    aggiorna(tdTot); // Chiamo la funzione aggiorna
});


function aggiorna(td){ // Funzione per aggiornare

console.log("Update in progress"); // Console log per capire
td[0].innerText = document.getElementById("cognome").value;// Cambio il valore della td[0] del innerText in ciò che c'é scritto sulla casella cognome
td[1].innerText = document.getElementById("nome").value; // Cambio il valore della td[1] del innerText in ciò che c'é scritto sulla casella nome
td[2].innerText = document.getElementById("indirizzo").value; // Cambio il valore della td[2] del innerText in ciò che c'é scritto sulla casella indirizzo
td[3].innerText = document.getElementById("numero").value; // Cambio il valore della td[3] del innerText in ciò che c'é scritto sulla casella telefono
}



