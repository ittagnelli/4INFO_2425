export const upper_case = (str) => {
    //INSERISCI QUI IL TUO CODICE
    let chars = str.split('');
    let str1 = [];

    for (let i = 0; i < chars.length; i++) {
        let code = chars[i].charCodeAt(0);
        code = code >= 97 && code <= 122 ? String.fromCharCode(code - 32) : chars[i];

        str1.push(code);
    }

    return str1.join('');
}

