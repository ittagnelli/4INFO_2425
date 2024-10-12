function addStudent() {
    const uList = document.getElementById('List');
    const lItem = document.createElement('li');
    const name = document.getElementById('Nome').value;
    const media = document.getElementById('Media').value;
    lItem.innerText = 'Nome: ' + name + ','+ ' Media: ' + media;
    uList.append(lItem);
}

function changeColor() {
    document.querySelectorAll('li:nth-child(odd)').forEach((element) => {
        element.style.color = 'red';
    });

    document.querySelectorAll('li:nth-child(even)').forEach((element) => {
        element.style.color = 'blue';
    });
}