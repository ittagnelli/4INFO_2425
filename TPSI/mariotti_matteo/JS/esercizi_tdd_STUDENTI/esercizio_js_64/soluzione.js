export const count_vocals = (str) => {
    const vowels = 'aeiouAEIOU';
    const vowelMap = new Map();

    for (const char of str) {
        if (vowels.includes(char)) {
            const lowerChar = char.toLowerCase();
            if (vowelMap.has(lowerChar)) {
                vowelMap.set(lowerChar, vowelMap.get(lowerChar) + 1);
            } else {
                vowelMap.set(lowerChar, 1);
            }
        }
    }

    return vowelMap;
}

