export const count_vocals = (str) => {
    const vocals = ['a', 'e', 'i', 'o', 'u'];
    const vocalCount = new Map();

    for (const char of str) {
        if (vocals.includes(char)) {
            vocalCount.set(char, (vocalCount.get(char) || 0) + 1);
        }
    }

    return vocalCount;
}

