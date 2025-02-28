export const map_arr = (l, n) => {
    return l.map(n => n % n === 0 ? 0 : n);
};
