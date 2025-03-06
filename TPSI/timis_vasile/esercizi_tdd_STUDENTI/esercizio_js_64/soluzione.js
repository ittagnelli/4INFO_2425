export const count_vocals = (str) => {
    let r = new Map();
    let r2 = new Set('aeiou');
    str.toLowerCase().split('').forEach(char => { 
        if (r2.has(char)) {
            if (r.has(char)) {  // per vedere se contiene già opppure nu
                r.set(char, r.get(char) + 1);
            } else {
                r.set(char, 1);
          }
    }
});
return r;
};
