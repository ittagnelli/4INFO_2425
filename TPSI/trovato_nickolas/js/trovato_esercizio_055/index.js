function add(){
    const nome =  document.getElementById('testo').value
    const media = document.getElementById('media').value
    const lista = document.getElementById('lista')
    const aggingi = document.createElement('tr');
    const agginginome = document.createElement('td')
    const aggingimedia = document.createElement('td')
    agginginome.innerHTML = nome
    aggingimedia.innerHTML = media
    aggingi.appendChild(agginginome)
    aggingi.appendChild(aggingimedia)
    lista.appendChild(aggingi)
}

function paint(){
    const lista = document.getElementById('lista')
    for(let i= 0; i < lista.children.length;i++){
        if(i%2 == 0){
            lista.children[i].style.background= 'red'
        }else{
            lista.children[i].style.background= 'blue'
        }
    }
}

function bol(){
    const lista = document.getElementById('lista')
    lista.classList.toggle('bol')
}

function whi(){
    const lista = document.getElementById('lista')
    for(let i= 0; i < lista.children.length;i++){
        for(let x= 0; x < 2;x++){
            lista.children[i].children[x].classList.toggle('whi')
        }
    }
}

function col(){
    const lista = document.getElementById('lista')
    for(let i= 0; i < lista.children.length;i++){
        lista.children[i].classList.toggle('col')
    }

}