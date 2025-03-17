function capitalize(str) {
    return str = str[0].toUpperCase() + str.slice(1);
}

export const abbreviazione = (str) => {
    let indice = str.indexOf(" ");
    let nome = str.slice(0, indice);
    let cognome = str[indice + 1] + ".";
    nome = capitalize(nome);
    cognome = capitalize(cognome);
    
    return `${nome} ${cognome}`;
}