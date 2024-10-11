function add_tabella(){
    // variables
    let nome = document.getElementById('nome').value;
    let media = document.getElementById('Media').value;
    let tabella = document.getElementById('table');
    const tr = document.createElement("tr");
    let casella1 = document.createElement("td");
    let casella2 = document.createElement("td");

    // function
    casella1.innerText = nome;
    casella2.innerText = media;

    tabella.append(tr);
    tr.append(casella1);
    tr.append(casella2);
}

function change(){
    const tabella = document.getElementById('table');
    const tr = tabella.children;
    
    for(let i = 0; i < tr.length; i++){
        if (i % 2 == 0) {
            tr[i].style.color = 'blue';
        }
        else {
            tr[i].style.color = 'red';
        }
    }
}