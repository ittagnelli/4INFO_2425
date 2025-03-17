function nome(){
    const table = document.getElementById("lista");
    const tr = document.createElement("tr");
    const nome = document.createElement("td");
    const media = document.createElement("td");

    nome.innerText = document.getElementById("nome").value;
    media.innerText = document.getElementById("media").value;

    table.append(tr);
    tr.append(nome,media);
}