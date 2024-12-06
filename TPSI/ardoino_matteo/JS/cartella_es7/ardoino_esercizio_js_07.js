function salva_contatto() {
    let utenti = localStorage.getItem("utenti") ? JSON.parse(localStorage.getItem("utenti")) : [];
    let utente = {
        nome: document.getElementById("nome").value,
        cognome: document.getElementById("cognome").value,
        indirizzo: document.getElementById("indirizzo").value,
        telefono: document.getElementById("telefono").value
    };

    if (utente.nome && utente.cognome && utente.indirizzo && utente.telefono) {
        utenti.push(utente);
        localStorage.setItem("utenti", JSON.stringify(utenti));
        alert("Contatto salvato");
        aggiorna_contatti(); 
    } else {
        alert("Inserisci tutti i dati");
    }
}

function aggiorna_contatti() {
    let contatti = JSON.parse(localStorage.getItem("utenti")) || [];
    let tabella = document.getElementById("utenti");

   
    tabella.innerHTML = `
        <tr>
            <th>Cognome</th>
            <th>Nome</th>
            <th>Indirizzo</th>
            <th>Telefono</th>
            <th colspan=2>Azioni</th>
        </tr>
        <tr class="inputx">
            <td><input type="text" id="cognome" size=15/></td>
            <td><input type="text" id="nome" size=15/></td>
            <td><input type="text" id="indirizzo" size=30/></td>
            <td><input type="text" id="telefono" size=10/></td>
            <td><button>Cerca</button></td>
            <td><button onclick="salva_contatto()">Salva</button></td>
            <td><button onclick="aggiorna_contatti()">Aggiorna</button></td>
        </tr>`;

    contatti.forEach((item, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.cognome}</td>
            <td>${item.nome}</td>
            <td>${item.indirizzo}</td>
            <td>${item.telefono}</td>
            <td><button onclick="rimuovi_contatto(${index})">rimuovi</button></td>
        `;
        tabella.appendChild(row);
    });
}

function rimuovi_contatto(index) {
    let utenti = JSON.parse(localStorage.getItem("utenti"));
    utenti.splice(index, 1); 
    localStorage.setItem("utenti", JSON.stringify(utenti)); 
    aggiorna_contatti(); 
}

document.addEventListener("DOMContentLoaded", aggiorna_contatti);
