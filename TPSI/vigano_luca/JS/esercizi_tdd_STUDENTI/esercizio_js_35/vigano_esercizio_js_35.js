export const tronca = (s, n) => {
    if (s.length > n) {
        return s.slice(0, n) + "…";
    }
    return s;
};