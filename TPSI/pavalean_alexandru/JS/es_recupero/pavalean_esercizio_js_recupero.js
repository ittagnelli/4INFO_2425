function aggiungi() {
    let title = document.getElementById("title").value;
    let regista = document.getElementById("director").value;
    let anno = document.getElementById("year").value;

        if ( title != "" || regista != "" || anno != "") {
        let td = document.createElement("td");
        let tr = document.createElement("tr"); // guarda il contenitore per le cards
        let h3 = document.createElement("h3");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let button1  = document.createElement("button");
        let button2 = document.createElement("button");
        button1.innerText = "Modifica";
        button2.innerText = "Elimina";
        button1.addEventListener("click", function tp() {
            document.getElementById("title").value = title;
            document.getElementById("director").value = regista;
            document.getElementById("year").value = anno;

            td.remove();
        });

        button2.addEventListener("click",function() {
            td.remove();
        });


        h3.innerText = title;
        p1.innerText = "Regista: " + regista;
        p2.innerText ="Anno: " + anno;

        td.classList.add("movieCard");
        button1.classList.add("edit");
        button2.classList.add("delete");
        td.append(h3, p1, p2, button1, button2);
        tr.append(td);
        movieContainer.append(tr);   
        


    }

    else {

        alert("Qualcosa è andato storto! ");
    }
}
function cerca(){

}