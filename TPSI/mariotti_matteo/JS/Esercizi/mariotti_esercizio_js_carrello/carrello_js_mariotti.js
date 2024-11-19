let cont = 0;

function add() {
    const tab = document.getElementById("carrello");
    let product = document.getElementById("prodoo").value;
    let quantity = document.getElementById("qty").value;
    let cost = document.getElementById("costo").value;

    if (product != "" && quantity != "" && cost != "") {
        let row = document.createElement("tr");
        let tdProduct = document.createElement("td");
        let tdQuantity = document.createElement("input");
        let tdCostPerUnit = document.createElement("td");
        let tdCost = document.createElement("td");
        let spanShoppingCart = document.createElement("span");

        tdProduct.innerText = product;
        tdQuantity.value = quantity;
        tdCostPerUnit.innerText = cost;
        tdCost.innerText = quantity * cost;

        tdQuantity.type = "number";

        spanShoppingCart.classList.add("material-icons", "icon-remove");
        spanShoppingCart.innerText = "remove_shopping_cart";

        spanShoppingCart.addEventListener("click", function() {
            row.remove();
            sum();
        });

        tdQuantity.addEventListener("input", function() {
            tdCost.innerText = tdQuantity.value * cost;

            if (cont == 1) {
                sum();
            }
        });


        row.append(tdProduct, tdQuantity, tdCostPerUnit, tdCost, spanShoppingCart);

        tab.appendChild(row);
    } else {
        alert("Compilare tutti i campi!");
    }
}

function sum() {
    cont = 1;
    const tab = document.getElementById("carrello");

    let rows = tab.getElementsByTagName("tr");
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
        const prezzo = rows[i].children[3];

        if (prezzo && prezzo.innerText) {
            sum += parseFloat(prezzo.innerText);  // Uso per convertire una stringa in un numero mobile
        }
    }

    let tot = document.getElementById("totale");
    tot.innerText = sum;
}


