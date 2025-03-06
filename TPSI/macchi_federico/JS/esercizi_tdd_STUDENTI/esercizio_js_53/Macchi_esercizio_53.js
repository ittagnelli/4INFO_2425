export const shuffle = (l, m) => {
   const part1 = l.slice(0, m + 1);
   const part2 = l.slice(m + 1);

   return [...part2.reverse(), ...part1.reverse()];
};
