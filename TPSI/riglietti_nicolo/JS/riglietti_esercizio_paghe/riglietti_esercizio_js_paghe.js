
function add(){    
    let dipartimento = document.getElementById("dipartimento").value;
    let cognome = document.getElementById("cognome").value;
    let nome = document.getElementById("nome").value;
    let mese = document.getElementById("mese").value;
    let importo = document.getElementById("importo").value;

    if(dipartimento != "" && cognome != "" && nome != "" && mese != "" && importo != ""){
        row = document.createElement("tr");
        tdDipartimento = document.createElement("td");
        tdCognome = document.createElement("td");
        tdNome = document.createElement("td");
        tdMese = document.createElement("td");
        tdImporto = document.createElement("td");

        tdDipartimento.innerText = dipartimento;
        tdCognome.innerText = cognome;
        tdNome.innerText = nome;
        tdMese.innerText = mese ; 
        tdImporto.innerText = importo;

        let rif = document.getElementById("rif");
        
        rif.after(row)
        row.append(tdDipartimento, tdCognome, tdNome, tdMese, tdImporto);

    }

}

function totale(){
    const tab = document.getElementById("paghe");  
    const rows = tab.getElementsByTagName("tr");     

    let totale = 0;

    let nRows = 0;
    
    for (let i = 2; i < rows.length; i++) {
        const row = rows[i];
        const imp= row.getElementsByTagName("td")[4];  

        if (imp) {
            const importo = parseFloat(imp.innerText.replace('€', ''));  

            totale += importo;
            nRows++;
        }
    }
    
    const totaleCell = document.getElementById("totale");

    if (totaleCell) {
        totaleCell.innerText = totale + " €"; 
    }

    return {totale, nRows};
}


function media(){
    
    const risTot = totale();

    let media = risTot.totale / risTot.nRows;

    let mediaCell = document.getElementById("media");

    mediaCell.innerText = media;

}