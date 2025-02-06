function modifica_stile() {
    let t1 = document.getElementsByClassName('titoloL1');
    let t2 = document.getElementsByClassName('titoloL2');
    let para1 = document.getElementById('par1');
    let para2 = document.getElementById('par2');
    let para3 = document.getElementById('par3');
    let para4 = document.getElementById('par4');
    let para5 = document.getElementById('par5');
    let para6 = document.getElementById('par6');
    let para7 = document.getElementById('par7');
    let para8 = document.getElementById('par8');

    for(let i = 0; i < t1.length; i++) {
        let el = t1[i];
        el.style.color = 'red';
    }

    for(let i = 0; i < t2.length; i++) {
        let el2 = t2[i];
        el2.style.color = 'blue';
        el2.style.backgroundColor = 'yellow';
        el2.style.fontSize = '40px';
        el2.innerText = el2.innerText.toUpperCase();
    }

    para1.style.color = 'red';
    para4.style.color = 'red';
    para2.style.backgroundColor = 'lightgreen';
    para5.style.backgroundColor = 'lightgreen';
    para8.style.backgroundColor = 'lightgreen';
    para3.innerText = para3.innerText.toUpperCase();
    para3.style.backgroundColor = 'lightblue';
    para6.innerText = para6.innerText.toUpperCase();
    para7.style.fontStyle = 'italic'
}