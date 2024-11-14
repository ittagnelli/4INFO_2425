function getInput(id) {
    return document.getElementById(id);
}

function fillQty(td, costo, id) {
    let input = document.createElement('input');
    input.type = 'number';
    input.min = 1;
    input.value = 1;
    input.id = `qty_${id}`;

    input.addEventListener('input', function () {
        document.getElementById(`importo_${id}`).innerText = calcolaImporto(`qty_${id}`, costo);
        somma();
    });

    td.appendChild(input);
    return td;
}

function calcolaImporto(id, costo) {
    let qty = document.getElementById(id).value;
    return Math.round(costo * parseInt(qty) * 100) / 100;
}

function createTR(prodotto, quantita, costo) {
    let tr = document.createElement('tr');
    let id = document.querySelectorAll('tr').length;

    let td_name = document.createElement('td');
    td_name.innerText = prodotto;

    let td_qty = document.createElement('td');
    fillQty(td_qty, costo, id);

    let td_costo = document.createElement('td');
    td_costo.classList.add('costo');
    td_costo.innerText = Math.round(costo * 100) / 100;

    let td_importo = document.createElement('td');
    td_importo.id = `importo_${id}`;
    td_importo.classList.add('importo');
    td_importo.innerText = Math.round(costo * quantita * 100) / 100;

    let td_icon = document.createElement('td');
    td_icon.classList.add("material-icons", "icon-remove");
    td_icon.innerText = 'remove_shopping_cart';
    td_icon.onclick = () => {
        rimuovi(`qty_${id}`);
        somma();
    };

    tr.appendChild(td_name);
    tr.appendChild(td_qty);
    tr.appendChild(td_costo);
    tr.appendChild(td_importo);
    tr.appendChild(td_icon);

    return tr;
}

function addToCart() {
    let prodotto = getInput('prodoo').value;
    let quantita = parseFloat(getInput('qty').value) || 1;
    let costo = parseFloat(getInput('costo').value) || 0;

    if (prodotto === "" || costo <= 0 || quantita <= 0) {
        alert('Compila tutti i campi correttamente');
        return;
    }

    let tr = createTR(prodotto, quantita, costo);
    let tableRows = document.querySelectorAll('tr');
    tableRows[tableRows.length - 3].after(tr);
    somma();
}

function rimuovi(id) {
    document.getElementById(id).parentElement.parentElement.remove();
}

function getTotale() {
    return document.getElementById('totale');
}

function somma() {
    let importi = document.getElementsByClassName('importo');
    let somma = 0;

    for (let i = 0; i < importi.length; i++) {
        somma += parseFloat(importi[i].innerText) || 0;
    }

    let totale = getTotale();
    totale.innerText = Math.round(somma * 100) / 100;
}