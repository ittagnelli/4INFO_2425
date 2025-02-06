function getTaskValue(){
    task = document.getElementById("task").value;
    return task;
}

function getPriorityValue(){
    priority = document.getElementById("priority").value;
    return priority;
}



function aggiungi(){
    console.log("Aggiungi Triggered")
    if(
        !getTaskValue()
    ){
        alert("Perfavore, compilare il campo")
        console.log("Error, getTaskVaule Empty")
    }else{

        const table = document.getElementById("table");


        const tr = document.createElement("td");
        const td_button = document.createElement("td");
        const td_task = document.createElement("td");
        const td_priority = document.createElement("td");
        const button = document.createElement("button");



        // if(getTaskValue() == "Spengere il pc"){
        //     alert("Premi ctrl + alt + f4");
        //     console.log("Test");
        // }

        td_task.innerText = getTaskValue();
        button.innerText = "Fatto"

        const priorityValue = getPriorityValue(); // Qui salviamo il valore della priorità

        if(priorityValue == "low"){
            console.log("Priority value low");
            td_task.innerText = "bassa priorità";
        }
        
        else if(priorityValue    == "mid"){
            console.log("Priority value mid");
            td_task.innerText = "media priorità";
        }

        else{
            console.log("Priority value high");
            td_task.innerText = "alta priorità";
        }

        table.append(tr)
        tr.append(td_task);
        tr.append(td_priority);
        tr.append(td_button);
        td_button.append(button);
        td_button.innerText = "Fatto";
        td_button.addEventListener("click",function(){rimuovi(tr)})


        // td_button.innerText = "Rimuovi";
        // td_button.addEventListener("click", function(){
        //     rimuovi(tr1);
        

    }
}


function rimuovi(tr){
    const tabella = document.getElementById("tab"); // Prendo la tabella totale
    tabella.removeChild(tr1); // Rimuovo il child
}
