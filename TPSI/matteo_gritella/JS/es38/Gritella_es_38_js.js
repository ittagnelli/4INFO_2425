export const reverse = (l) => {
    

    let a = [];

    l.forEach((n, i) => {
        a[l.length - 1 - i] = n;
    });

    return a;
};