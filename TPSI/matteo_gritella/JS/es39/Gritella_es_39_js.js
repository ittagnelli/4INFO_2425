export const reverse = (l) => {
    let a = [];
    let s = 0;   

    l.forEach((n, i) => {
        a[l.length - 1 - i] = n;
        s += n;
    });

    a.unshift(s)

    return a;
}