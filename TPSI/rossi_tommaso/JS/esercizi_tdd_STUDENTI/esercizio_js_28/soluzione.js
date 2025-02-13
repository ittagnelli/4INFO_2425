export const upper_case = (str) => {
    let chars = str.split('');

    chars.forEach((char, i) => {
        chars[i] = toUpperCaseAscii(char)
    });

    return chars.join('')
}

const toUpperCaseAscii = (char) => {
    let code = char.charCodeAt(0);
    return code > 96 && code < 123 ? String.fromCharCode(code - 32) : char;

}