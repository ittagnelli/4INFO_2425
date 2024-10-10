function modifica_stile() {
    document.querySelectorAll('h1').forEach(h1 => {
        h1.style.color = 'red';
    });

    document.querySelectorAll('h2').forEach(h2 => {
        h2.style.color = 'blue';
        h2.style.backgroundColor = 'yellow';
        h2.style.fontSize = '40px';
        h2.style.textTransform = 'uppercase';e
    });

    document.getElementById('par1').style.color = 'red';
    document.getElementById('par4').style.color = 'red';

    document.getElementById('par2').style.backgroundColor = 'lightgreen';
    document.getElementById('par5').style.backgroundColor = 'lightgreen';
    document.getElementById('par8').style.backgroundColor = 'lightgreen';

    const par3 = document.getElementById('par3');
    par3.style.textTransform = 'uppercase';
    par3.style.backgroundColor = 'lightblue';

    document.getElementById('par6').style.textTransform = 'uppercase';

    document.getElementById('par7').style.fontStyle = 'italic';
}