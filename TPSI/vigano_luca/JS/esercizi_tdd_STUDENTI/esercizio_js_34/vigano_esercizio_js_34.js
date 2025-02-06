export const insert = (str1, agg, pos) => {
    if (pos > str1.length) {
        pos = str1.length;
    }
    return str1.slice(0, pos) + agg + str1.slice(pos);
};