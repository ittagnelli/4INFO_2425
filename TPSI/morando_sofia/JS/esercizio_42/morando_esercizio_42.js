export const swap = (l, n, m) => {
    let x = l.at(n);
    l.slice(n, 1);
    l.slice(m >=0 ? m : m + 1, 0, x);
    return l;
}

