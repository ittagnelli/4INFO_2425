function studente(){
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

function blue(){
    const lista = document.getElementById("lista");
    const li = lista.children;

    for(let i = 0; i < li.length; i++){
        li[i].classList.add("blue");
    }
}

function bordo(){
    const lista = document.getElementById("lista");
    lista.classList.add("bordo");
}