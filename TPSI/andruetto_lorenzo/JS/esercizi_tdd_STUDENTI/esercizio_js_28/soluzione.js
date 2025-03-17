export const upper_case = (str) => {
    //INSERISCI QUI IL TUO CODICE
    let str1 = "";
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        str1 += code >= 97 && code <= 122 ? String.fromCharCode(code - 32) : str[i];
    }
    return str1;
}

