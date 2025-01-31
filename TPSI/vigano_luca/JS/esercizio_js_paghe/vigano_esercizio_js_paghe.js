
function add(){
    const tab = document.getElementById("paghe")
    const node = document.getElementById("nodo")
    let dipartimento = document.getElementById("dipartimenti").value
    let cognome = document.getElementById("cognome").value
    let nome = document.getElementById("nome").value
    let mese = document.getElementById("mese").value
    let importo = document.getElementById("importo").value
    if (dipartimento != "" && cognome != "" && nome != "" && mese != "" && importo != ""){
        let ntr = document.createElement("tr")
        let ntd1 = document.createElement("td")
        let ntd2 = document.createElement("td")
        let ntd3 = document.createElement("td")
        let ntd4 = document.createElement("td")
        let ntd5 = document.createElement("td")
        ntd1.innerText = dipartimento
        ntd2.innerText = cognome
        ntd3.innerText = nome
        ntd4.innerText = mese
        ntd5.innerText = importo + " " + "€"
        ntd5.classList = "importo"
        node.after(ntr)
        ntr.append(ntd1)
        ntr.append(ntd2)
        ntr.append(ntd3)
        ntr.append(ntd4)
        ntr.append(ntd5)
    }
    else{
        alert("uno dei blocchi non è riempito")
    }
}

function tot(){
    let check = document.getElementsByClassName("prima")
    console.log(check)
    let numeri = document.getElementsByClassName("importo")
    let tot = 0
    for(let i = 0; i < numeri.length ;i++){
        tot += parseInt(numeri[i].innerText)
    }
    
}