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
    const li_items = ul.children;
    for(var i = 0; i < li_items.length; i++) {
        var li = li_items[i];
        li.classList.add("blue");
    }
}


        function studenti_bordo() {
            const ul = document.getElementById("tabella");
            ul.classList.toggle("bordo");
        }


        function studenti_grassetto() {
            const ul = document.getElementById("tabella");
            ul.classList.toggle("grassetto");
        }