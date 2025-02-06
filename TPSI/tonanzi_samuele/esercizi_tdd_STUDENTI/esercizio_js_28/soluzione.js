export const upper_case = (str) => {
    //INSERISCI QUI IL TUO CODICE
    let maiuscolo = "";
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) { 
            maiuscolo += String.fromCharCode(charCode - 32);
        } else {
            maiuscolo += str[i];
        }
    }
    return maiuscolo;
}

