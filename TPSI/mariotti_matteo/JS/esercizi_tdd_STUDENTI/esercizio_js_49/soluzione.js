export const map_arr = (l, n) => {
    return l.map(el => el % 5 === 0 ? 0 : el);
};
