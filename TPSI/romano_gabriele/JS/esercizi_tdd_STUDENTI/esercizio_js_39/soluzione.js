export const reverse = (l) => {
    let len = l.length;
    let sum = 0;
    for (let i = 0; i < len / 2; i++) {
        let a = l[i];
        l[i] = l[l.length - i - 1];
        l[l.length - i - 1] = a;
    }

    for (let n of l)
        sum += n;

    l.unshift(sum);

    return l;
}