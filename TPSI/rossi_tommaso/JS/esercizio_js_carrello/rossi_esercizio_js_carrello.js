function getInput(id) {
    return document.getElementById(id);
}

function createProduct(prodotto, quantita, costo) {
    let tr = document.createElement('tr');
    let td_nome = document.createElement('td');
    let td_quantita = fillQty();
    let td_costo = document.createElement('td');
    addClass(td_costo, 'costo' );
    let td_importo = document.createElement('td');
    addClass(td_importo, 'importo');
    let td_icon = document.createElement('td');
    addClass(td_icon, 'material-icons');
    addClass(td_icon, 'icon-remove')

    tr.append(td_nome, td_quantita, td_costo, td_importo, td_icon)
    return tr
}

function fillQty() {
    let td = document.createElement('td');
    let input_qty = document.querySelectorAll(input).length - 2; //trovo quanti sono gli input partendo da 1 non contando i tre iniziali 
    let input = document.createElement('input');
    input.id = `qty-${input_qty}`;
    input.type = 'number';
    input.min = 1;
    td.appendChild(input);
}

function fillTd(td, id) {
    let value = document.getElementById(id);
    td.innerText = value
}

function addClass(element, cls) {
    element.classList.add(cls)
}

function addToCart() {
    let prodotto = getInput('prodoo')
    let quantita = getInput('qty')
    let costo = getInput('costo')

    let table = document.querySelector('table')
    table.append(createProduct(prodotto, quantita, costo))
    
}