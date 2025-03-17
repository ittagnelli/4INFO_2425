export const tronca = (s, n) => {
    const words = s.split(' ');
    if (words.length <= n) {
        return s;
    }
    return words.slice(0, n).join(' ');
};