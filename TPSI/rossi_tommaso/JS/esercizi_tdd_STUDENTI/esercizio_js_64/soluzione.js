export const count_vocals = (str) => {
    let map = new Map();
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    for (let char of str) {
        if (vowels.has(char)) {
            map.set(char, (map.get(char) || 0) + 1);
        }
    }
    
    return map;
};