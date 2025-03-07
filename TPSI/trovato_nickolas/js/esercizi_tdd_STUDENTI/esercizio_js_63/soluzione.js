export const unique_characters = (str) => {
    const charCount = new Map();
    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    return [...str].filter(char => charCount.get(char) === 1).join('');
};