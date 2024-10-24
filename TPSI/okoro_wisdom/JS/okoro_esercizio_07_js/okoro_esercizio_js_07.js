function add_studente(){
    
    const table = document.getElementById("Tabella"); //nomina la tabella e nome 
    const Nome = document.getElementById("Nome").value; 
    const Cognome = document.getElementById("Cognome").value; 
    const Indirizzo = document.getElementById("Indirizzo").value; 
    const Telefono = document.getElementById("Telefono").value; 
    const bottone = document.createElement("button")
    bottone.innerText = "Rimuovi"

    bottone.classList.add('Rimuovi')
   
    const tr = document.createElement("tr") //crei la riga
    const td_nome= document.createElement("td")//crea box per td per nome 
    const td_cognome= document.createElement("td")
    const td_Indirizzo= document.createElement("td") 
    const td_telefono= document.createElement("td")
    const td_bottone= document.createElement("td")

    td_nome.innerText = Nome // inserisci dentro
    td_cognome.innerText = Cognome 
    td_Indirizzo.innerText = Indirizzo 
    td_telefono.innerText = Telefono 
   
    td_bottone.append(bottone)
    tr.append(td_cognome)
    table.append(tr)
    tr.append(td_nome)
    table.append(tr)
    tr.append(td_Indirizzo)
    table.append(tr)
    tr.append(td_telefono)
    table.append(tr)
    tr.append(td_bottone)
    table.append(tr)
    
    bottone.addEventListener('click',remove(id))
}


function remove(id){

}