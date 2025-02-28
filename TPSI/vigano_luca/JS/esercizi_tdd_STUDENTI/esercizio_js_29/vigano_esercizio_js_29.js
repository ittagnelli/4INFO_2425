export const invert_case = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            // Converti il carattere maiuscolo in minuscolo
            result += String.fromCharCode(charCode + 32);
        } else if (charCode >= 97 && charCode <= 122) {
            // Converti il carattere minuscolo in maiuscolo
            result += String.fromCharCode(charCode - 32);
        } else {
            // Mantieni il carattere invariato se non è una lettera
            result += str[i];
        }
    }
    return str = result;
}

