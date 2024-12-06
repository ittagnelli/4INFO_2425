c = 0;
const table = document.getElementById("carrello");

function add(){
    let ogg = document.getElementById("prodotto").value;
    let qty = document.getElementById("quantity").value;
    let prz = document.getElementById("costo").value;
    let rif = document.getElementById("rif");   
    if(ogg !="" && qty !="" && prz!=""){
        
        let row = document.createElement("tr");
        let tdogg = document.createElement("td");
        let tdqty = document.createElement("input");
        let tdprz = document.createElement("td");
        let tduni = document.createElement("td");
        let tdbut = document.createElement("span");
        tdogg.innerText = ogg;
        tdqty.value = qty;
        tdprz.innerText = prz;
        tdprz.classList.add("prz");
        tduni.innerText = prz * qty;
        tdqty.type = "number";
        tdqty.addEventListener("input", function(){
            tduni.innerText = tdqty.value * prz;
            if(c == 1){
                somma();
            }
        })

        tdbut.classList.add("material-icons","icon-remove");
        tdbut.innerText = "remove_shopping_cart";
        tdbut.addEventListener("click", function(){
            row.remove();
            somma();    
        })
        
        

        tduni.classList.add("importo")
        rif.after(row);
        row.append(tdogg,tdqty,tdprz,tduni,tdbut);
    }

    else{
        alert("compilare tutto!");
    }
}
function somma(){
    c = 1;
    const row = table.getElementsByTagName("tr");
    let tot = 0;
    for(let i = 2; i <row.length;i++){
        let prz = row[i].children[3];
        if(prz && prz.innerText){
            tot += parseFloat(prz.innerText);
        }
    }
    let idtot = document.getElementById("totale");
    idtot.innerText = tot + " €";
}
 