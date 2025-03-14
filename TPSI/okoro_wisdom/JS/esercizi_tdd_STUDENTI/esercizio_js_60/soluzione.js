export function is_anagram(arr) {
    const sortedWords = arr.map(word => word.split('').sort().join(''));
    const seen = new Set();
    const duplicates = new Set();

    for (const word of sortedWords) {
        if (seen.has(word)) {
            duplicates.add(word);
        }
        seen.add(word);
    }

    return arr.filter((word, index) => !duplicates.has(sortedWords[index]));
}

