function add() {
    const nomeProdotto = document.getElementById('prodoo').value;
    const quantita = document.getElementById('qty').value;
    const costoUnitario = document.getElementById('costo').value;

    const costoTotale = quantita * costoUnitario;

        if(nomeProdotto == '' || quantita =='' || costoUnitario == ''){
            alert('Inserire Elementi Mancani')
            return 0
        }
    
        const tr = document.createElement('tr')
        const tdnopeProdotto = document.createElement('td')
        const tdquantita = document.createElement('input')
        const tdcostoUnitario = document.createElement('td')
        const tdCostoTotale = document.createElement('td');
        const spanRimuovi = document.createElement('span');

        tdcostoUnitario.innerText = costoUnitario
        tdnopeProdotto.innerText = nomeProdotto
        tdquantita.innerText = quantita
        tdCostoTotale.innerText = costoTotale;

       
        spanRimuovi.classList.add('material-icons', 'icon-remove');
        spanRimuovi.innerText = 'remove_shopping_cart';
        spanRimuovi.onclick = function () 
        {
            tr.remove(); 
            aggiornaTotale(); 
        };
       
        tr.append(tdnopeProdotto)
        tr.append(tdquantita)
        tr.append(tdcostoUnitario)
        tr.append(tdCostoTotale)
        tr.append(spanRimuovi)
        document.getElementById('carrello').appendChild(tr); 

        aggiornaTotale();
    }


function aggiornaCosto(input) {
   
    const tr = input.closest('tr');
    const quantita = input.value;
    
    const costoUnitario = tr.cells[2].innerText;
    const costoTotale = quantita * costoUnitario;

    tr.cells[3].innerText = costoTotale

    aggiornaTotale();
}




function rimuoviProdotto(icone) {
    const tr = icone.parentElement.parentElement;
            tr.remove()

    aggiornaTotale();
}

function aggiornaTotale() {
    let totale = 0;

    const righe = document.getElementById('carrello').getElementsByTagName('tr');
    for (let i = 1; i < righe.length; i++) 
    { 
        const costoTotale = righe[i].cells[3].innerText
        totale = totale + costoTotale;
    }

    document.getElementById('totale').innerText = totale;
}

