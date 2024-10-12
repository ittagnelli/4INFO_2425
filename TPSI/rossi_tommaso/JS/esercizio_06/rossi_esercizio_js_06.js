function addStudent() {
    const uList = document.getElementById('List');
    const lItem = document.createElement('li');
    const name = document.getElementById('Nome').value;
    const media = document.getElementById('Media').value;
    lItem.innerText = 'Nome: ' + name + ','+ ' Media: ' + media;
    uList.append(lItem);
}

function changeColor() {
    document.querySelectorAll('li:nth-child(odd)').forEach((element) => element.style.color = 'red');

    document.querySelectorAll('li:nth-child(even)').forEach((element) => element.style.color = 'blue');
}

function bold() {
    document.querySelectorAll('li').forEach((element) => element.style.fontWeight = 'bold')
}

function blue() {
    document.querySelectorAll('li').forEach((element) => element.style.color = 'blue')
}

border = () => {
    const b = document.querySelectorAll('#List');
    b.forEach((element) => {
        if (element.style.border === '1px solid black')
            element.style.border = '0px'
        else
            element.style.border = '1px solid black'

        console.log(element.style.border)
    })
}