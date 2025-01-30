function capitalizeAll(stringa){
    let parole = stringa.split(" ");
    let inizialiMaiuscole = "";
    for(let i = 0; i < parole.length; i++){
        let lettera = parole[i].substring(0,1).toUpperCase();
        inizialiMaiuscole = inizialiMaiuscole + " " + (lettera + parole[i].slice(1));
    }
    console.log(inizialiMaiuscole);
}

let stringa = "ciao come stai tutto benee molto beello"
capitalizeAll(stringa);