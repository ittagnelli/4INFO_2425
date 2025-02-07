function add_studente() {
    console.log("add studente");
    const tabella  = document.getElementById("tabella"); 
    const nome_str = document.getElementById("nome").value; 
    const td1 = document.createElement("td"); 
    const media_str = document.getElementById("media").value;
    const td2 = document.createElement("td");
    const tr = document.createElement("tr");
    td1.innerText = nome_str; 
    tr.append(td1); 
    td2.innerText = media_str;
    tr.append(td2);
    tabella.append(tr);
  }

  function colora_studenti() {
            const ul = document.getElementById("tabella");
            console.log("Ecco l'oggetto ul %o", ul);
            const li_items = ul.children;
            console.log("Ecco gli items della lista %o", li_items);
            for(var i = 0; i < li_items.length; i++) {
                var li = li_items[i];
                console.log("Ecco il singolo li %o", li);
                if ( i % 2 == 0 )
                    
                    li.style.color = "red";
                
                else

                li.style.color = "blue";
             
            }
        }
