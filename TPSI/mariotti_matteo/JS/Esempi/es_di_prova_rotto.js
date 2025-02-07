// function add_number(){
//     const table = document.getElementById("lista"); //prevelo l'oggetto <ul> dal DOM tramite id
//     const tr = document.createElement("tr");
//     const nome_str = document.getElementById("nome").value;
//     const cognome_str = document.getElementById("cognome").value;
//     const indirizzo_str = document.getElementById("indirizzo").value;
//     const num_str = document.getElementById("numero").value;

//     if(nome_str != "" && cognome_str != "" && indirizzo_str != "" && num_str != ""){

//     const tr1 = document.createElement("tr");
//     const td1 = document.createElement("td");
//     const td2 = document.createElement("td");
//     const td3 = document.createElement("td");
//     const td4 = document.createElement("td");
//     const td5 = document.createElement("button");
//     lista.append(tr1)
    
//     td1.innerText = nome_str; 
//     td2.innerText = cognome_str;    
//     td3.innerText = indirizzo_str;
//     td4.innerText = num_str;
//     td5.innerText = "Rimuovi"
//     tr1.append(td1)
//     tr1.append(td2)
//     tr1.append(td3)
//     tr1.append(td4)  
//     tr1.append(td5)
//     console.log("Numero %s aggiunto", cognome_str);
//     }  
//     else{
//         alert("Compilare tutti i campi")
//     }

// }


// function aggiorna(){


// }


// function cerca(){
    
// }

// function rimuovi(tr){
// const tabella = document.getElementById("lista")
// tabella.removeChild(tr)
// }

// // console.log("Numero di %s aggiunto", cognome_str);
// // }  
// // else{
// //     alert("Compilare tutti i campi")
// // }

// // }


// // function aggiorna(){


// // }


// // function cerca(){

// // }

// // function rimuovi(tr){
// // const tabella = document.getElementById("lista")
// // // tabella.removeChild("tr")




// let surname = document.getElementById("cognome").value;
// let phone = document.getElementById("numero").value;

// let table = document.getElementById("tab");
// let righe = table.getElementsByTagName("tr");
// let buttonAggiorna = document.getElementById("agg");
// let cellePresenti = null;

// for (let i = 1; i < righe.length; i++) { 
//     let celle = righe[i].getElementsByTagName("td"); 

//     let cellSurname = celle[0].innerText; 
//     let cellPhone = celle[3].innerText; 

//     if (cellSurname === surname || cellPhone === phone) {
//         console.log("ciao")
//         document.getElementById("tdsurname").value = cellSurname;
//         document.getElementById("tdphone").value = cellPhone;
//         document.getElementById("tdname").value = celle[1].innerText;
//         document.getElementById("tdaddress").value = celle[2].innerText;

//         cellePresenti = celle;
//     }else{
//         alert("non presente nella lista oppure campi vuoti");
//     }

// }
// buttonAggiorna.addEventListener("click",function(){
//     aggiorna(cellePresenti);
// });
// }