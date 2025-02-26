export const reverse = (l) => {
    l.reverse();
    l.unshift(l.reduce((acc, current) => acc + current, 0));
    return l;
}