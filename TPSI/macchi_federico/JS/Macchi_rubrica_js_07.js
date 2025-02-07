function add() {
    
    
    
    let nome_str = document.getElementById("nome").value; 
    let cognome_str = document.getElementById("cognome").value;
    let indirizzo_str = document.getElementById("indirizzo").value; 
    let numero_str = document.getElementById("numero").value; 
    const tabella = document.getElementById("tabella");
    let riga= document.createElement("tr"); 
    let colonna1= document.createElement("td")
    let colonna2= document.createElement("td")
    let colonna3= document.createElement("td")
    let colonna4= document.createElement("td")
    let colonna5= document.createElement("button")




    colonna1.innerText= nome_str;
    colonna2.innerText= cognome_str;
    colonna3.innerText= indirizzo_str;
    colonna4.innerText= numero_str;
    colonna5.innerText= "Elimina";

    riga.append(colonna1,colonna2,colonna3,colonna4,colonna5)
    tabella.append(riga);
    
    colonna5.addEventListener("click",function()
    {
        rimu()
    });


function rimu(){

    const tabella = document.getElementById("tabella")
    tabella.removeChild(riga)

}
}


function cerca(){
  
    let surname = document.getElementById("cognome").value;
    let phone = document.getElementById("numero").value;

    let table = document.getElementById("tabella");
    let righe = table.getElementsByTagName("tr");
    let buttonAggiorna = document.getElementById("agg");
    let cellePresenti = null;

    for (let i = 1; i < righe.length; i++) { 
        let celle = righe[i].getElementsByTagName("td"); 

        let cellSurname = celle[0].innerText; 
        let cellPhone = celle[3].innerText; 

        if (cellSurname === surname || cellPhone === phone) {
        
            document.getElementById("cognome").value = cellSurname;
            document.getElementById("numero").value = cellPhone;
            document.getElementById("nome").value = celle[1].innerText;
            document.getElementById("indirizzo").value = celle[2].innerText;

            cellePresenti = celle;
        }else{
            alert("non presente nella lista oppure campi vuoti");
        }

    }
    buttonAggiorna.addEventListener("click",function(){
        aggiorna(cellePresenti);
    });


    
}
