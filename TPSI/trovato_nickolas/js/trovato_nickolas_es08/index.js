function add(){
    const input = document.getElementsByTagName('input')[0].value
    if(input === ''){
       alert('immentere un nome')
       return 1
    }
    const date = Date.now()
    const stato = document.getElementsByTagName('select')[0]
    const statovalue = stato[stato.selectedIndex].value

    const lista = document.getElementById('lista')
    const tr = document.createElement('tr')
    tr.id = date
    for(var i = 0; i < 4;i++){
        const td = document.createElement('td')
        if(i){
            const img = document.createElement('img')
            if(i == 3){
                img.src = 'img/cestino.png'
                img.setAttribute('onclick','remove('+date+')') 
        
            }else if(i == 2){
                img.src = 'img/check.png'
                img.setAttribute('onclick','check('+date+')') 
        
            }else{
                img.src = 'img/'+statovalue+'.png' 
        
            }
            td.appendChild(img)
        }else{
            td.innerHTML = input
        }
        tr.appendChild(td)
    }
    lista.appendChild(tr)
    const nome = document.cre
    return 0
    }

function remove(date){
    document.getElementById(date).remove()
}

function check(date){
    document.getElementById(date).children[0].classList.toggle('sbar')
}