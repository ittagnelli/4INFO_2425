function capitalize(stringa){
        let[prima,seconda] = stringa.split(" ");
        let prima1 = prima.substring(0,1).toUpperCase();
        console.log(prima1+prima.slice(1), seconda);
}

stringa = "ciao mondo";
capitalize(stringa);