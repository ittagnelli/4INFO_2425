
function modifica_stile(){
    let titleH1 = document.getElementsByTagName("h1");

    for(let i = 0; i <titleH1.length; i++ ){
        titleH1[i].style.color = "red";
    }

    let titleH2 = document.getElementsByTagName("h2");

    for(let i = 0; i <titleH2.length; i++ ){
        titleH2[i].style.color = "blue";
        titleH2[i].style.backgroundColor = "yellow";
        titleH2[i].style.fontSize = "40px";
        titleH2[i].innerText = titleH2[i].innerText.toUpperCase();

    }

    let para1 = document.getElementById("par1");
    let para4 = document.getElementById("par4");

    para1.style.color = "red";
    para4.style.color = "red";

    let para2 = document.getElementById("par2");
    let para5 = document.getElementById("par5");
    let para8 = document.getElementById("par8");

    para2.style.backgroundColor = "#62f752";
    para5.style.backgroundColor = "#62f752";
    para8.style.backgroundColor = "#62f752";

    let para3 = document.getElementById("par3");
    para3.innerText = para3.innerText.toUpperCase();
    para3.style.backgroundColor = "#51b4ed";

    let para6 = document.getElementById("par6");
    para6.innerText = para6.innerText.toUpperCase();

    let para7 = document.getElementById("par7");
    para7.style.fontStyle = "italic";
}