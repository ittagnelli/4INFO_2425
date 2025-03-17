export const swap = (l, n, m) => {
    let n2 = l[m];
    let n1 = l[n];
    l[m] = n1;
    l[n] = n2;
    return l;
};
