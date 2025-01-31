function add(){
    const tab = document.getElementById("table");
    let task = document.getElementById("task").value;
    let priority = document.getElementById("priority"); 


    if(task != ''){    

        let row = document.createElement("tr");
        let tdTask = document.createElement("td");
        let tdPriority = document.createElement("td");

        let check = document.createElement("td");
        let trash = document.createElement("td");

        let col = document.createElement("td");

        col.classList.add("colSpan");

        check.className = "fa-solid fa-check";
        trash.className = "fa-solid fa-trash";

        check.addEventListener("click", function(){
            checkTask(row, tdTask);
        });


        trash.addEventListener("click", function(){
            delate(row);
        });

        tdTask.innerText = task;
        tdPriority = priority.value;

        if(tdPriority == "low"){

            let lowI = document.createElement("i");

            lowI.className = "fa-solid fa-arrow-down";
            
                    
            row.append(tdTask, col, lowI, check, trash);
        }
        
        else if(tdPriority == "mid"){

            let midI = document.createElement("i");
        
            midI.className = "fa-solid fa-arrow-right";
                    
            row.append(tdTask, col, midI, check, trash);

        }else if(tdPriority == "high"){

            let highI = document.createElement("i");

            highI.className = "fa-solid fa-arrow-up";
        
            row.append(tdTask, col, highI, check, trash);
        }
    
    
        tab.append(row);

    } else {
        alert("ERRORE: titolo task mancante");
    }
}

function delate(row){
    const tab = document.getElementById("table");
    tab.removeChild(row);
}

function checkTask(tdTask){
    const tab = document.getElementById("table");
    tdTask.classList.toggle("checked");    
}