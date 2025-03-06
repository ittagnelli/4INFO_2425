export const unique_characters = (str) => {
    let uniqueChars = new Set();
    let result = ''; // array vuoto
    for (let char of str) {
        if (!uniqueChars.has(char)) {
            uniqueChars.add(char);
            result += char;
        }
    }
return result;
};
