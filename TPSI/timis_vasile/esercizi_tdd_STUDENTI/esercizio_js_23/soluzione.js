export const abbreviazione = (str) => {
    let nome_1 = str.split(" ");
    if (nome_1.length < 2) {
        return str; 
    }
    else {
    let nome_2 = nome_1[0];
    let cognome = nome_1[1].charAt(0).toUpperCase() + "."; 
    return nome_2 + " " + cognome;
}
}

