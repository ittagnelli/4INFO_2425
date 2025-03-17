export const unique_characters = (str) => {
    return [...new Set(str.split(''))].join('');
}
