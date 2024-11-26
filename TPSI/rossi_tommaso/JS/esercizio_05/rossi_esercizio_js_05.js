function aggiungiRiga() {
    const nome = document.getElementById('name').value;
    const media = document.getElementById('media').value;
    if (nome && media) {
        const tableBody = document.getElementById('tableBody');
        const newRow = tableBody.insertRow();
        const cellNome = newRow.insertCell(0);
        const cellMedia = newRow.insertCell(1);
        cellNome.textContent = nome;
        cellMedia.textContent = media;
    }
}

function coloraRighe() {
    const rows = document.querySelectorAll('#tableBody tr');
    rows.forEach((row, index) => {
        if (index % 2 === 0) {
            row.style.backgroundColor = 'blue';
        } else {
            row.style.backgroundColor = 'red';
        }
    });
}
