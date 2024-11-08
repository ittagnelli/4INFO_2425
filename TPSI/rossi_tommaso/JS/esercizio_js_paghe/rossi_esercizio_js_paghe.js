function getInput() {
    let input = {
        dipartimento: document.getElementById('dipartimento').value,
        cognome: document.getElementById('cognome').value,
        nome: document.getElementById('nome').value,
        mese: document.getElementById('mese').value,
        importo: document.getElementById('importo').value
    };
    return input;
}

function getPosition() {
    let position = document.querySelectorAll('tr');
    position = position[1];
    return position;
}

function controllaRiempimento(input) {
    if (input.dipartimento == '' || input.cognome == '' || input.nome == '' || input.mese == '' || input.importo == '') {
        alert('completa tutti i campi per continuare');
        return false;
    }
    return true;
}

function creaTrRegistrazione(input) {
    let tr = document.createElement('tr');

    let td_dip = document.createElement('td');
    td_dip.innerText = input.dipartimento;

    let td_cog = document.createElement('td');
    td_cog.innerText = input.cognome;

    let td_nom = document.createElement('td');
    td_nom.innerText = input.nome;

    let td_mes = document.createElement('td');
    td_mes.innerText = input.mese;

    let td_imp = document.createElement('td');
    td_imp.innerText = input.importo;
    addClass(td_imp, 'importo');
    addClass(td_imp, 'calcolabile');
    
    tr.append(td_dip, td_cog, td_nom, td_mes, td_imp);
    return tr;
}

function addClass(element, classe) {
    element.classList.add(classe);
}

function nuovaRegistrazione() {
    let input = getInput();
    if (controllaRiempimento(input)) {
        let posizione = getPosition();
        posizione.after(creaTrRegistrazione(input));    
    }
}

function getImporti(classe) {
    return document.getElementsByClassName(classe);
}

function mostra(classe) {
    let components = document.getElementsByClassName(classe);
    for (let i = 0; i < components.length; i++) {
        components[i].classList.remove('hidden');
    }
}

function getComponent(classe) {
    return document.querySelector('.' + classe + ' > .importo');
}

function somma(importi) {
    let somma = 0;
    for (let i = 0; i < importi.length; i++) {
        somma += parseInt(importi[i].innerText);
    }
    return somma;
}

function calcolaSomma() {
    let displaySomma = getComponent('sommatoria');
    let importi = getImporti('calcolabile');
    if (importi.length > 1) {
        displaySomma.innerText = somma(importi);
        mostra('sommatoria');
    } else {
        alert('Per calcolare la somma ci devono essere 2 o più argomenti');
    }
}

function calcolaMedia() {
    let displayMedia = getComponent('media');
    let importi = getImporti('calcolabile');
    if (importi.length > 1) {
        displayMedia.innerText = somma(importi) / importi.length;
        mostra('media');
    } else {
        alert('Per calcolare la media ci devono essere 2 o più argomenti');
    }
}
