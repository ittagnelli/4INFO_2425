export const swap = (l, n, m) => {
    let rimosso = l.splice(n, 1);
    if(m < 0)
        m++;
    l.splice(m, 0, rimosso);

    return l;
};
