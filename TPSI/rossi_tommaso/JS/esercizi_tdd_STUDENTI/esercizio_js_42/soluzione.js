export const swap = (l, n, m) => {
    let arr = [...l];

    n = n >= 0 ? n : l.length + n;
    m = m >= 0 ? m : l.length + m;

    if (n < 0 || m < 0 || n >= l.length || m >= l.length) return l;

    let [item] = arr.splice(n, 1);
    arr.splice(m, 0, item);

    return arr;
};