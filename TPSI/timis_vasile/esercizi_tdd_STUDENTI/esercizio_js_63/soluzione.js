export const unique_characters = (str) => {
    let set = new Set();
    let result = ''; // array vuoto
    for (let char of str) {
        if (!set.has(char)) {
            set.add(char);
            result += char;
        }
    }
return result;
};
