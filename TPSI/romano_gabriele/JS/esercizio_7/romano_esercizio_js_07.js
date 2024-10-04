function is_Empty(isEmptyParameter) {
    let inputsRow = document.getElementById("inputs");
    let inputsCols = inputsRow.querySelectorAll("input");
    let isEmpty = false;
    if(!isEmptyParameter) {
        for(let i = 0; i < inputsCols.length; i++) {
            if(inputsCols[i].value.trim() == "")
                isEmpty = true;
        }
    }
    else {
        if(inputsCols[0].value.trim() == "" && inputsCols[3].value.trim() == "")
            isEmpty = true;
        }

    return isEmpty;
}

function found(match) {
    alert("contatto trovato");
    let tabella = document.getElementById("tabella");
    let inputsRow = document.getElementById("inputs");
    let inputsCols = inputsRow.querySelectorAll("input");
    let rows = tabella.querySelectorAll("tr");
    let cols = rows[match[0]].querySelectorAll("td");

    for(let i = 0; i < inputsCols.length; i++)  
        inputsCols[i].value = cols[i].innerText;

    rows[match[0]].remove();
}

function salva() {
    let isEmptyParameter = 0;
    if(is_Empty(isEmptyParameter)) {
        alert("Compilare tutti i campi prima di salvare");
        return 0;
    }

    let tabella = document.getElementById("tabella");
    let inputsRow = document.getElementById("inputs");
    let inputsCols = inputsRow.querySelectorAll("input");

    let tr = document.createElement("tr");
    let t1 = document.createElement("td");
    let t2 = document.createElement("td");
    let t3 = document.createElement("td");
    let t4 = document.createElement("td");
    let b1 = document.createElement("td")
    let remove = document.createElement("button");

    t1.innerText = inputsCols[0].value;
    t2.innerText = inputsCols[1].value;
    t3.innerText = inputsCols[2].value;
    t4.innerText = inputsCols[3].value;
    b1['colSpan'] = 2;
    remove.innerText = "Rimuovi";

    remove.addEventListener("click", function() {
        tr.remove();
    });

    b1.append(remove);
    tr.append(t1, t2, t3, t4, b1);
    tabella.append(tr);

    for(let i = 0; i < 4; i++)
        inputsCols[i].value = "";
}

function cerca() {
    let isEmptyParameter = 1;
    if(is_Empty(isEmptyParameter)) {
        alert("Compilare i campi necessari per la ricerca");
        return 0;
    }

    let tabella = document.getElementById("tabella");
    let inputsRow = document.getElementById("inputs");
    let inputsCols = inputsRow.querySelectorAll("input");
    let rows = tabella.querySelectorAll("tr");
    let cols;
    let cMatch = [];
    let nMatch = [];

    let cognome = inputsCols[0].value;
    let numero = inputsCols[3].value;

    // riempi cMatch
    for(let i = 2; i < rows.length; i++) {
        cols = rows[i].querySelectorAll("td");
        if(cognome == cols[0].innerText) {
            cMatch.push(i);
        }
    }

    // riempi nMatch
    for(let i = 2; i < rows.length; i++) {
        cols = rows[i].querySelectorAll("td");
        if(numero == cols[3].innerText) {
            nMatch.push(i);
        }
    }

    if(!cMatch.length && !nMatch.length) {
        alert("Contatto non presente nella rubrica");
        return 0;
    }

    if((cMatch.length || nMatch.length) || (cMatch.length > 1 || nMatch.length > 1)) {
        if(cMatch.length > 1)
            alert("Sono presenti più contatti con il cognome inserito");
        else if(nMatch.length > 1)
            alert("Sono presenti più contatti con il numero di telefono inserito");
        else if(cMatch.length)
            found(cMatch);
        else
            found(nMatch);
    }
}