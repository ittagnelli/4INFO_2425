function modifica_stile() {
let primo = document.getElementsByClassName("titoloL1");
let secondo = document.getElementsByClassName("titoloL2");

for(let i = 0; i < primo.length; i++)
primo[i].style.color = "red";

for(let i = 0; i < secondo.length; i++) {
secondo[i].style.color = "blue";
secondo[i].style.backgroundColor = "yellow";
secondo[i].style.fontSize = "40px";
secondo[i].innerText = secondo[i].innerText.toUpperCase();
}

let primoP = document.getElementById("par1");
let secondoP = document.getElementById("par2");
let terzoP = document.getElementById("par3");
let quartoP = document.getElementById("par4");
let quintoP = document.getElementById("par5");
let sestoP = document.getElementById("par6");
let settimoP = document.getElementById("par7");
let ottavoP = document.getElementById("par8");

primoP.style.color = "red";
quartoP.style.color = "red";
secondoP.style.backgroundColor = "lightgreen";
quintoP.style.backgroundColor = "lightgreen";
ottavoP.style.backgroundColor = "lightgreen";
terzoP.innerText = terzoP.innerText.toUpperCase();
terzoP.style.backgroundColor = "lightblue";
sestoP.innerText = sestoP.innerText.toUpperCase();
settimoP.innerHTML = settimoP.innerHTML.italics();
}