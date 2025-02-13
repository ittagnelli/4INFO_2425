export const swap = (l, n, m) => {
    if (n < 0 || n >= l.length || m < 0 || m >= l.length) {
        throw new Error("Indici fuori dai limiti dell'array");
    }
    const element = l.splice(n, 1)[0];
    l.splice(m, 0, element);
    return l;
};
