function add_studente(){
    
    const table = document.getElementById("Tabella"); //nomina la tabella e nome e media
    const Nome = document.getElementById("Nome").value; 
    const Media = document.getElementById("Media").value;

    const tr = document.createElement("tr") //crei la riga
    const td_nome= document.createElement("td")//crea box per td per nome e media
    const td_media = document.createElement("td")

    td_nome.innerText = Nome // inserisci dentro
    td_media.innerText = Media

   
   tr.append(td_nome)
   tr.append(td_media)
   table.append(tr)

}

function color(){
    const tabella = document.getElementById("Tabella")
    const linee = tabella.children
    
    for(let i=0;i < linee.lenght;i++){
        const linea = linee[i];
        let colore = 'red';
        linea.style.color = colore
        if(i % 2==0)
         colore = 'red'
        else
         colore = 'blue'
       
    }
   
}