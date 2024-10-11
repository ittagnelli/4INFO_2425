function modifica_stile() {
    let para1 = document.querySelector(".titoloL1");
    para1.style.color = "red";

    let para2 = document.querySelectorAll(".titoloL2");
    for (let i = 0; i < 6; i++) {
        para2[i].style.color = "blue";
        para2[i].style.backgroundColor = "yellow";
        para2[i].style.fontSize = "40px";
        para2[i].innerText = para2[i].innerText.toUpperCase();
    }

    let paragrafo1 = document.getElementById("par1");
    paragrafo1.style.color = "red";

    let paragrafo2 = document.getElementById("par2");
    paragrafo2.style.color = "lightgreen";

    let paragrafo3 = document.getElementById("par3");
    paragrafo3.style.color = "lightblue";
    paragrafo3.innerText = paragrafo3.innerText.toLowerCase();

    let paragrafo4 = document.getElementById("par4");
    paragrafo4.style.color = "red";

    let paragrafo5 = document.getElementById("par5");
    paragrafo5.style.color = "lightgreen";

    let paragrafo6 = document.getElementById("par6");
    paragrafo6.innerText = paragrafo6.innerText.toUpperCase();

    let paragrafo7 = document.getElementById("par7");
    paragrafo7.style.fontStyle = "italic";

    let paragrafo8 = document.getElementById("par8");
    paragrafo8.style.color = "lightgreen";






}