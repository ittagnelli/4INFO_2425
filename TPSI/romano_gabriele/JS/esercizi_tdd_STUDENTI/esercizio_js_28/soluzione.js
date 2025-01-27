export const upper_case = (str) => {
    let char = '';
    let upperString = '';
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        char = str[i];
        if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            let code = str.charCodeAt(i) - 32;
            char = String.fromCharCode(code);
        }

        upperString += char;
    }

    return upperString;
}