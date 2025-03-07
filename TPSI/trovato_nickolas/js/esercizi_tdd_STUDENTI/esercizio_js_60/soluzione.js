export function is_anagram(arr) {
    const groups = arr.reduce((map, word) => {
        const key = word.split('').sort().join('');
        map.set(key, (map.get(key) || 0) + 1);
        return map;
    }, new Map());

    return arr.filter(word => groups.get(word.split('').sort().join('')) === 1);
}
