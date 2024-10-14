function add(){
    const lista = document.getElementById("lista");

    const nome = document.getElementById("name").value;
    const voto = document.getElementById("voto").value;

    const li = document.createElement("li");

    li.innerText = nome + "   " + voto;

    lista.append(li);   
}    

function grassetto(){
    const lista = document.getElementById("lista");
    const li = lista.children;

    for(let i = 0; i < li.length; i++){
        li[i].classList.add("grassetto");
    }
}
