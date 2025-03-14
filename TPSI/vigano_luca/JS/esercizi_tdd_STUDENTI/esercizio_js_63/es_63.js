export const unique_characters = (str) => {
    return Array.from(str).filter(char => {
        if (seen.has(char)) {
            return false;
        } else {
            seen.add(char);
            return true;
        }
    }).join('');
}
