function modifica_stile() {
    //h1
    document.querySelectorAll('h1').forEach(titolo => {
        titolo.style.color = 'red';
    });
    //h2
    document.querySelectorAll('h2').forEach(titolo => {
        titolo.style.color = 'blue';
        titolo.style.backgroundColor = 'yellow';
        titolo.style.fontSize = '40px';
        titolo.textContent = titolo.textContent.toUpperCase();
    });
    //par 1 e 4
    let par = [document.querySelector('#par1'), document.querySelector('#par4')]
    par.forEach((paragrafo) => {
        paragrafo.style.color = 'red';
    })
    //par 2, 5 e 8
    par = [document.querySelector('#par2'), document.querySelector('#par5'), document.querySelector('#par8')]
    par.forEach((paragrafo) => {
        paragrafo.style.backgroundColor = 'lightgreen';
    })
    //par 3
    par = document.querySelector('#par3');
    par.innerText = par.innerText.toUpperCase();
    par.style.backgroundColor = 'lightblue';
    //par 6
    par = document.querySelector('#par6');
    par.innerText = par.innerText.toUpperCase();
    //par 7
    par = document.querySelector('#par7');
    par.style.fontStyle = 'italic';
}

