export const upper_case = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        // Controlla se il carattere è una lettera minuscola (a-z)
        if (charCode >= 97 && charCode <= 122) {
            // Converti il carattere minuscolo in maiuscolo
            result += String.fromCharCode(charCode - 32);
        } else {
            // Mantieni il carattere invariato se non è una lettera minuscola
            result += str[i];
        }
    }
    return str = result;
}

