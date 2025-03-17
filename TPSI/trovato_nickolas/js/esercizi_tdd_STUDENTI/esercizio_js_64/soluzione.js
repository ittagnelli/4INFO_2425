export const count_vocals = (inputStr) => {
    const vowelsList = 'aeiou';
    const vowelMap = new Map();

    for (const character of inputStr.toLowerCase()) {
        if (vowelsList.includes(character)) {
            vowelMap.set(character, (vowelMap.get(character) || 0) + 1);
        }
    }

    return vowelMap;
};
