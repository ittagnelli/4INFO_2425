function remove(n){
    const tablella = document.getElementById('table')
    let = tr = tablella.querySelectorAll('tr')
    for(var i = n; i< tr.length;i++){
        tr[i].querySelector('button').setAttribute("onclick","remove("+(i-1)+")")
    }
    tablella.querySelectorAll('tr')[n].remove()
}


function add(info){
    const tablella = document.getElementById('table')
    let tr  =  document.createElement('tr')
   
    for(var i = 0;i < 4;i++){
        if(info[i].value === ''){
            alert('compilare tutti i campi')
            tr.remove();
            tr = null;
            return 0
        }
        const td = document.createElement('td')
       
        td.innerHTML = info[i].value
        tr.appendChild(td)
    }

    for(var i = 0; i < 4 ;i++){
        info[i].value = ''
    }

    const button = document.createElement('button')
    button.setAttribute("onclick","remove("+(tablella.querySelectorAll('tr').length)+")")
    button.innerHTML = 'Rimuovi'
    tr.appendChild(button)

    tablella.appendChild(tr)
    return 1
}

function cerca(info){
    const tablella = document.getElementById('table')
    let tr  =  tablella.querySelectorAll('tr')
   
    for(var i = 2;i < tr.length;i++){
        const td = tr[i].children;
        if(info[0].value === td[0].innerHTML || info[3].innerHTML === td[3].value){
            for(var x = 0; x< 4; x++){
                info[x].value = td[x].innerHTML
            }
            document.getElementById('aggiuorna').style.opacity = 1
            document.getElementById('aggiuorna').setAttribute("onclick","aggiorna("+(i)+")")
            return 1
        }
    }
    document.getElementById('aggiuorna').style.opacity = 0
    return 0
}

function aggiorna(n){
    const tablella = document.getElementById('table')
    const tr = tablella.querySelectorAll('tr')
    for(i = 0; i < 4;i++){
        tr[n].children[i].innerHTML = tr[1].children[i].children[0].value
    }

}