export const unique_characters = (str) => {
    const uniqueChars = new Set(str);
    return Array.from(uniqueChars).join('');
}
