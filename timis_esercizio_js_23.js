


function abbreviazione(stringa) {
    let nome_1 = stringa.split(" ");
    if (nome_1.length < 2) {
        return stringa; 
    }
    else {
    let nome_2 = nome_1[0];
    let cognome = nome_1[1].charAt(0).toUpperCase() + "."; 
    return nome_2 + " " + cognome;
}
}

function main() {
    console.log(abbreviazione("Vasile Timis")); 
}

main();