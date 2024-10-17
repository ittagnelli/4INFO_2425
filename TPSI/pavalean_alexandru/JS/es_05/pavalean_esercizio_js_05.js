function aggiunginome(){
    const table = document.getElementById("lista");
    const tr = document.createElement("tr");
    const nome = document.createElement("td");
    const media = document.createElement("td");

    tdNome.innerText = document.getElementById("nome").value;
    tdMedia.innerText = document.getElementById("media").value;

    table.append(tr);
    tr.append(nome,media);
}