export const map_arr = (l, n) => {
    return l.filter(numero => numero % n != 0)
};
