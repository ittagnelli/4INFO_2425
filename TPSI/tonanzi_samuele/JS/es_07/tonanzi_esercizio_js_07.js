function salva(){
    const tab = document.getElementById("table");
    let cog = document.getElementById("cognome").value;
    let nom = document.getElementById("nome").value;
    let ind = document.getElementById("indirizzo").value;
    let tel = document.getElementById("telefono").value;

    if(cog != "" && nom != "" && ind != "" && tel != ""){
        let row = document.createElement("tr");
        let tdcog = document.createElement("td");
        let tdnom = document.createElement("td");
        let tdind = document.createElement("td");
        let tdtel = document.createElement("td");
        let tdcol = document.createElement("td");
        let butrim = document.createElement("button");


        tdcol.classList.add("col");


        tdcog.innerText = cog;
        tdnom.innerText = nom;
        tdind.innerText = ind;
        tdtel.innerText = tel;
        butrim.innerText = "rimuovi"; 
        
        row.append(tdcog, tdnom, tdind, tdtel,tdcol,butrim);
        tab.append(row);

        butrim.addEventListener('click', function(){
            rimuovi(row, tab);
        })


        
    }
    else{
        alert("tutti i campi devono essere pieni.")
    }
}   

function rimuovi(row, tab){

    tab.removeChild(row);
}

function cerca(){
    
    const table = document.getElementById("table");
    let row = table.getElementsByTagName("tr");
    let cog = document.getElementById("cognome").value;
    let tel = document.getElementById("telefono").value;
    console.log(row.length)
    let trovato = false;

    if(cog != "" && tel == ""){
        for(let i=1;i<row.length;i++){
            const tdcog = row[i].getElementsByTagName("td")[0];

            if(tdcog.innerText == cog){
                const tdnom = row[i].getElementsByTagName("td")[1];
                const tdind = row[i].getElementsByTagName("td")[2];
                const tdtel = row[i].getElementsByTagName("td")[3];

                let nom = document.getElementById("nome");
                let ind = document.getElementById("indirizzo");
                let tel = document.getElementById("telefono");

                nom.value = tdnom.innerText;
                ind.value = tdind.innerText;
                tel.value = tdtel.innerText;

                trovato = true;
                break;
            }       
        }
    
    } else if(cog == "" && tel!= ""){
        for (let i=1;i<row.length;i++){
            const tdtel = row[i].getElementsByTagName("td")[3];
            
            if(tdtel.innerText == tel){
                const tdcog = row[i].getElementsByTagName("td")[0];
                const tdnom = row[i].getElementsByTagName("td")[1];
                const tdind = row[i].getElementsByTagName("td")[2];
                
                let cog = document.getElementById("cognome");
                let nom = document.getElementById("nome");
                let ind = document.getElementById("indirizzo");

                cog.value = tdcog.innerText;
                nom.value = tdnom.innerText;
                ind.value = tdind.innerText;

                trovato == true;
                break;
            }
        }
        
    }
    else{
        alert("ERRORE!");
    }
    if(!trovato){
        alert("nessuna corrispondenza");
    }
}

function aggiorna(){
    const tab = document.getElementById("table");
    let row = tab.getElementsByTagName("td");
    let cog = document.getElementById("cognome").value;
    let nom = document.getElementById("nome").value;
    let ind = document.getElementById("indirizzo").value;
    let tel = document.getElementById("telefono").value;

    for(let i=1;i<row.lenght;i++){
        const tdcog = row[i].getElementsByTagName("td")[0];

        if(tdcog.innerText== cog){
            row[i].getElementsByTagName("td")[0].innerText = cog;
            row[i].getElementsByTagName("td")[1].innerText = nom;
            row[i].getElementsByTagName("td")[2].innerText = ind;
            row[i].getElementsByTagName("td")[3].innerText = tel;    
            break;
        }

        document.getElementById("cognome").value = "";
        document.getElementById("nome").value = "";
        document.getElementById("indirizzo").value = "";
        document.getElementById("telefono").value = "";
    }
    }

