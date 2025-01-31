// controlla se la stringa è vuota
function isEmptyString(stringa) {
    return stringa == "" ? 0 : 1
}

// assegna testo ad un elemento creato
function assegnaTesto(created, text) {
    created.innerText = text.value;
    return created;
}

function righe() {
    let tabella = table();
    return tabella.querySelectorAll("tr");
}

// numero di paghe
function nPaghe() {
    rows = righe();
    return rows.length - 8;
}

// controlla se nPaghe è maggiore di 1
function nPagheCheck() {
    return nPaghe() > 1 ? 1 : 0;
}

// prende un elemento in base all'id
function getById(id) {
    return document.getElementById(id);
}

function table() {
    return getById("paghe");
}

// prende una lista di elementi in base alla classe
function getByClass(classe) {
    return document.getElementsByClassName(classe);
}

// calcola la somma
function sum() {
    let rows = righe();
    let nPagheTrs = nPaghe();
    let somma = 0;

    for(let i = 2; i < nPagheTrs + 2; i++) {
        let rowTds = rows[i].querySelectorAll("td");
        let tdImporto = rowTds[4];
        somma += parseInt(tdImporto.innerText);
    }

    return somma;
}

// calcola la media
function average() {
    return sum() / nPaghe();
}

// rimuove classe agli elementi di una lista di lunghezza 3 (utilizzata per mostrare i tr totale e media)
function show(lista, classe) {
    for(let i = 0; i < 3; i++)
        lista[0].classList.remove(classe);
}

// controlla se l'elemento è già desplayed ed in caso negativo lo mostra
function isDesplayed(elemento, classe) {
    if(elemento.length > 0)
        show(elemento, classe);
}

// aggiunge o aggiorna
function add(column, calcolo, row, classe) {
    if(nPagheCheck()) {
        column.innerText = calcolo;

        isDesplayed(row, classe);
    }
    else
        alert("Numero non sufficiente di paghe");
}

// aggiunge riga
function addRow(dipartimentoInp, cognomeInp, nomeInp, meseInp, importoInp, firstTr) {
    let row = document.createElement("tr");
    let dipartimento = document.createElement("td");
    let cognome = document.createElement("td");
    let nome = document.createElement("td");
    let mese = document.createElement("td");
    let importo = document.createElement("td");

    dipartimento = assegnaTesto(dipartimento, dipartimentoInp);
    cognome = assegnaTesto(cognome, cognomeInp);
    nome = assegnaTesto(nome, nomeInp);
    mese = assegnaTesto(mese, meseInp);
    importo = assegnaTesto(importo, importoInp);

    importo.classList.add("importo");

    row.append(dipartimento, cognome, nome, mese, importo);
    firstTr.after(row);
}

// aggiunge paga
function addPaga() {
    let dipartimentoInp = getById("dipartimento");
    let cognomeInp = getById("cognome");
    let nomeInp = getById("nome");
    let meseInp = getById("mese");
    let importoInp = getById("importo");
    let tabella = getById("paghe");
    let rows = tabella.querySelectorAll("tr");
    let firstTr = rows[1];

    if(isEmptyString(dipartimentoInp.value) && isEmptyString(cognomeInp.value) && isEmptyString(nomeInp.value) && isEmptyString(meseInp.value) && isEmptyString(importoInp.value))
        addRow(dipartimentoInp, cognomeInp, nomeInp, meseInp, importoInp, firstTr);
    else
        alert("Compilare tutti i campi");
}

// aggiunge e aggiorna il totale
function addSomma() {
    let totalClass = "hide-total";
    let totalTr = getByClass(totalClass);
    let totalTd = getById("somma");

    add(totalTd, sum(), totalTr, totalClass);
}

// aggiunge e aggiorna la media
function addAverage() {
    let averageClass = "hide-average";
    let averageTr = getByClass(averageClass);
    let averageTd = getById("media");

    add(averageTd, average(), averageTr, averageClass);
}