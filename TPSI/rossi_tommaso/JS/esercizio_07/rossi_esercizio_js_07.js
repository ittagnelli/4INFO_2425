const rubrica = {
    cognome: [],
    nome: [],
    indirizzo: [],
    telefono: []
};

function search() {
    const cognome = document.getElementById('Cognome').value;
    const telefono = document.getElementById('Telefono').value;
    let found = false;

    for (let i = 0; i < rubrica.cognome.length; i++) {
        if (rubrica.cognome[i] === cognome || rubrica.telefono[i] === telefono) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${rubrica.cognome[i]}</td>
                <td>${rubrica.nome[i]}</td>
                <td>${rubrica.indirizzo[i]}</td>
                <td>${rubrica.telefono[i]}</td>
                <td colspan="2">
                    <button onclick="remove(this)">Rimuovi</button>
                </td>`;

            document.querySelector('tbody').insertBefore(tr, document.querySelector('.inputx').nextSibling);
            found = true;
            break;
        }
    }

    if (!found) {
        alert("Nessun contatto trovato.");
    }
}


function save() {
    let campi = true
    const dati = [
        document.getElementById('Cognome'),
        document.getElementById('Nome'),
        document.getElementById('Indirizzo'),
        document.getElementById('Telefono')
    ];

    dati.forEach((element) => {
        if (campi && element.value === '') {
            alert('Campi non validi');
            campi = false;
            return;
        }
    })

    if (campi) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
                    <td>${dati[0].value}</td>\n
                    <td>${dati[1].value}</td>\n
                    <td>${dati[2].value}</td>\n
                    <td>${dati[3].value}</td>\n
                    <td colspan="2">
                        <button onclick="remove(this)">Rimuovi</button>
                    </td>`;

        rubrica.cognome.push(dati[0].value);
        rubrica.nome.push(dati[1].value);
        rubrica.indirizzo.push(dati[2].value);
        rubrica.telefono.push(dati[3].value);

        console.log(rubrica)
        
        document.querySelector('tbody').appendChild(tr);
    }

    dati.forEach((element) => {
        element.value = '';
    })
}

function update() {
}

function remove(element) {
    element.parentElement.parentElement.remove();
}
