

function add_studente() {
    const table = document.getElementById("lista"); //prevelo l'oggetto <ul> dal DOM tramite id
    const tr = document.createElement("tr");
    const cognome_str = document.getElementById("cognome").value; //accedo al valore del campo text
    const media = document.getElementById("media").value; //accedo al valore del campo text
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    lista.append(tr)
    td1.innerText = cognome_str; 
    td2.innerText = media;
    tr.append(td1)
    tr.append(td2)
    console.log("Studente %s creato", cognome_str);
}


// function studenti_colora() {
//   console.log("Studenti coloro inizializzato");
//   var lung = document.getElementsByClassName("tr") // Sbagliato
//   for(let i = 0; i < lung.lenght; i++){
//      const Element = tr[i];
//       if(i % 2 == 0){
//           Element[i].style.backgroundColor = "blue"
//           console.log("Pari");
//       }
//       else{   
//           Element.style.backgroundColor = "red" 
//           console.log("Dispari");
//      }
//       }   
//   }

function studenti_colora(){
    console.log("Studenti colora inizializzato")
    const tabella = document.getElementById("lista");
    const linee = tabella.children;

    for(let i = 0; i < linee.length; i++){
        const linea = linee[i];
        if(i % 2 == 0){
        linea.style.color = "blue"
        }
        else{
        linea.style.color = "red"    
        }
    }
}



function grass(){
    const table = document.getElementById("tab");
    const trs = table.children;
    for(var i = 0; i < trs.lenght; i++){
        var tr = trs[i];
        tr.classList.add("grass");
    }
}

function border(){
    const table = document.getElementById("tab");
    table.classList.toggle("border");
}


function colore_blu(){
    console.log("Studenti colora inizializzato")
    const tabella = document.getElementById("lista");
    const linee = tabella.children;

    for(let i = 0; i < linee.length; i++){
        const linea = linee[i];
        if(i % 2 == 0){
        linea.style.color = "blue"
        }
        else{
        linea.style.color = "blue"    
        }
    }
}