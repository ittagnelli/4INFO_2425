function add_student() {
    let surname = document.getElementById("cognome_studente")
    let name = document.getElementById("nome_studente")
    n_studente = 1
    if (name.value == '' || surname.value == '') {
        alert("inserire il cognome e il nome");
        return

    }   
    else {
        let studente = document.createElement('div');
        n_studente++;
        studente.className = 'section';
        let span = document.createElement('span')
        span.className = 'student grassetto'
        span.innerText = '$(name.alue) $(surname.value)'
        studente.innerHTML = `
        <span class="student grassetto">${surname.value} ${name.value}</span>
        <input type="text" id="input_materia_studente${n_studente}"placeholder="Materia" />
        <input type="number" id="input_voto_studente${n_studente}" placeholder="Voto" min="2" max="10" step="0.5" />
        <span class="material-icons icona-button icona-adjust" onclick="add_materia('studente1')">add</span>
        <span class="material-icons icona-button icona-adjust" onclick="update_average('studente1')">timeline</span>
        `;

        

        document.body.appendChild(studente)
        name.value = '';
        surname.value = '';



    }

}
function add_materia(studente) {
    if (i === 0) {
         let tabella = document.createElement('table')
         tabella.id = studente;
         tabelle.push(tabella);
        
            createTabella(tabella , studente);
            let tr = document.createElement('tr');
            let materia = document.createElement('td');
            materia.innerText = document.getElementById(`input_materia_${studente}`).value
            let voto = document.createElement('td')
            voto.innerText = document.getElementById(`input_voto_${studente}`).value
            libCampi(studente)
            tabella.appendChild(tr);
            tr.append(voto);
            tr.append(materia);
            document.body.appendChild(tabella);



     }


    }

function createTabella(tabella , studente) {
    let student = document.getElementById(studente);
    let tabella = document.createElement('table');
    tabella.id = studente;
    let tr = document.createElement('tr');
    tabella.appendChild(tr);
    let th1 = document.createElement('th');
    th1.innerText = 'Materia'
    let th2 = document.createElement('th');
    th2.innerText = 'voto';
    tr.append(th1)
    tr.append(th2)

}
function libCampi(studente) {
    document.getElementById(`input_voto_${studente}`).value = ``;
    document.getElementById(`input_materia_${studente}`).value = ``;
    

}
function createTabella(studente) {
    
}





