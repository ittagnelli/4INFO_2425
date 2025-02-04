export const upper_case = (str) => {
    let result = '';
    for(let i = 0; i < str.length; i++){
        let carattere = str.charCodeAt(i);
        let carattereMaiuscolo = String.fromCharCode(carattere - 32);
        result = result + carattereMaiuscolo;
    }

    return result;
}

