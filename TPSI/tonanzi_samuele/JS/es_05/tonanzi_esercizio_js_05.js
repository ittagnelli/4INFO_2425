function funzione(){
    const table = document.getElementById("lista");
    const nome = document.getElementById("nome").value;
    const media = document.getElementById("media").value;
    
    
    const tr = document.createElement("tr");
    const td_nome = document.createElement("td");
    const td_media = document.createElement("td");
    

    td_nome.innerText = nome;
    td_media.innerText = media;

    table.append(tr);
    tr.append(td_nome);
    tr.append(td_media);
    
}

function colora(){  
    const table = document.getElementById("lista");
    const tr_items = table.children;
    for(let i = 0; i < tr_items.length; i++){
        if(i%2==0){
            tr_items[i].style.color="red";
        }
        else{
            tr_items[i].style.color="green";
        }  
    }
}