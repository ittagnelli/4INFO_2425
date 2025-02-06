let cont = 0 

function add(){
    const tab = document.getElementById("carrello");
    let prodotto = document.getElementById("prodoo").value;
    let quantita = document.getElementById("qty").value;
    let costo = document.getElementById("costo").value;


    if(prodotto != "" && quantita != "" && costo != ""){

        const rif = document.getElementById("rif");

        let row = document.createElement("tr");
        let tdProdotto = document.createElement("td");
        let tdQuantita = document.createElement("input");
        let tdCostoUni = document.createElement("td");
        let tdCosto = document.createElement("td");
        let spanCarrello = document.createElement("span");


        tdProdotto.innerText = prodotto;
        tdQuantita.value = quantita;
        tdCostoUni.innerText = costo;

        tdCosto.innerText = quantita * costo;

        tdQuantita.type = "number";

        spanCarrello.classList.add("material-icons", "icon-remove");

        spanCarrello.innerText = "remove_shopping_cart";

        spanCarrello.addEventListener("click", function(){
            row.remove();
            somma();
        });

        tdQuantita.addEventListener("input", function () {
            tdCosto.innerText = tdQuantita.value * costo;

            if (cont == 1){
                somma();
            }
        });

        row.append(tdProdotto, tdQuantita, tdCostoUni, tdCosto, spanCarrello);
        rif.after(row);


    }else{
        alert("ERRORE: compilare tutti i campi!");
    }
}


function somma(){
    cont = 1; 
    const tab = document.getElementById("carrello");

    let rows = tab.getElementsByTagName("tr");

    let sum = 0;

    for(let i = 2; i < rows.length; i++){
        
        const prezzo = rows[i].children[3];

        if (prezzo && prezzo.innerText) {
            sum += parseFloat(prezzo.innerText);  
        }
    }

    let tot = document.getElementById("totale");

    tot.innerText = sum;
}