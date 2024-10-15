
function add(){
    const table = document.getElementById("table");

    const nome = document.getElementById("name").value;
    const voto = document.getElementById("voto").value;

    const tr = document.createElement("tr");
    const tdNome = document.createElement("td");
    const tdVoto = document.createElement("td");
    
    tdNome.innerText = nome;
    tdVoto.innerText = voto;

    tr.append(tdNome, tdVoto);
    table.append(tr);
    
}    

function color(){

    const table = document.getElementById("table");
    const td = table.children;

    for(let i = 0; i < td.length; i++){
        if(i % 2 === 0){
            td[i].style.color = 'blue';
        }else{
            td[i].style.color = 'red';
        }
    }
}