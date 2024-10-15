function aggiungi(){

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
function gras(){
    let tabella = document.getElementById("Tabella");
    let rows = tabella.querySelectorAll("tr");
    for (let i = 0; i < rows.length; i++)
        rows[i].classList.add("grassetto");
}

function bordo(){
    const col = document.getElementById("bordo");
    col.classList.toggle("bordo")

}

function Blue() {
    let tabella = document.getElementById("Tabella");
    let rows = tabella.querySelectorAll("tr");
    for (let i = 0; i < rows.length; i++)
        rows[i].classList.add("Blue");
}

function colore(){
    const tabella = document.getElementById("Tabella");
    const linee = tabella.children; 

    for (let i = 0; i < linee.length; i++) { 
        const linea = linee[i];

        if (i % 2 == 0) {
            linea.style.color = 'red';
        } else {
            linea.style.color = 'blue'; 
        }
    }

}