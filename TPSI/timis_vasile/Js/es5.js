
function colore(){

    const tabella = document.getElementById("tabella");
    const td = tabella.children;

    for(let i = 0; i < td.length; i++){
        if(i > 0){
            td[i].style.color = 'blue';
        }else{
            td[i].style.color = 'red';
        }
    }
}


function aggiungo(){
    const tabella = document.getElementById("tabella");
            const nome = document.getElementById("name").value;
    const voto = document.getElementById("voto").value;

        const tr = document.createElement("tr");
        const Nome = document.createElement("td");
        const Voto = document.createElement("td");

                Nome.innerText = nome;
                Voto.innerText = voto;

                tr.append(Nome, Voto);
                tabella.append(tr);

}    
