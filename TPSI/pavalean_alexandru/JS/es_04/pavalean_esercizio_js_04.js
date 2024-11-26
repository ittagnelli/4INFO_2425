function modifica_stile(){
    let flt = document.getElementsByClassName("titoloL1");
    for(let i = 0;i < flt.length; i++)
        flt[i].style.color = "red";
    let slt = document.getElementsByClassName("titoloL2");
    for(let i = 0; i < slt.length ; i++){
        slt[i].style.color = "blue";
        slt[i].style.backgroundColor= "yellow"; 
        slt[i].style.fontSize = "40px";
    }

    let fpar = document.getElementById("par1");
    fpar.style.color = "red";
    let f_par = document.getElementById("par4");
    f_par.style.color = "red";

    let gpar = document.getElementsByClassName("green_par");
    for(let i = 0;i < gpar.length; i++)
        gpar[i].style.color = "green";

    let tpar = document.getElementById("par3");
    let text = tpar.textContent;
    tpar.innerHTML = text.toUpperCase();
    tpar.style.color = "blue";

    let six_par = document.getElementById("par6");
    let text_2 = six_par.textContent;
    six_par.innerHTML = text_2.toUpperCase();

    let sev_par = document.getElementById("par7");
    sev_par.style.fontStyle = "italic";
}