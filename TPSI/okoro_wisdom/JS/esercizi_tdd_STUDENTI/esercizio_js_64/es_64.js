export const count_vocals = (str) => {
    const vowels = new Map();
    const vocalList = ['a', 'e', 'i', 'o', 'u'];

    for (const char of str.toLowerCase()) {
        if (vocalList.includes(char)) {
            vowels.set(char, (vowels.get(char) || 0) + 1);
        }
    }

    return vowels;
};

console.log(count_vocals("supercalifragilistichespiralidoso"));
