export const abbreviazione = (str) => {
    let [nome, cognome] = str.split(" ");
    cognome = cognome.substring(0,1).toUpperCase();
    let nome2 = nome.substring(0,1).toUpperCase();
    let nome3 = nome2 + nome.slice(1)

    return (nome3 +' '+ cognome +".");
}

