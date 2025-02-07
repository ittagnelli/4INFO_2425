function uppercase(str) {
    return str = str[0].toUpperCase() + str.slice(1);
}

export const abbreviazione = (str) => {
    let indice = str.indexOf(" ");
    let nome = str.slice(0, indice);
    let cognome = str[indice + 1] + ".";
    nome = uppercase(nome);
    cognome = uppercase(cognome);

    return `${nome} ${cognome}`;
}