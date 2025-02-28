export const shuffle = (l, m) => {
   if (m < 0) return l;

    const part1 = l.slice(0, m + 1).reverse();
    const part2 = l.slice(m + 1).reverse();
    return [...part1, ...part2];
};