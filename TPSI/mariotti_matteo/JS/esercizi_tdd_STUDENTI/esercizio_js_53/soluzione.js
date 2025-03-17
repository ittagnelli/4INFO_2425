export const shuffle = (l, m) => {
   // let primopezzo = l.slice(0, m + 1);
   // let secondopezzo = l.slice(m + 1);
   // return primopezzo.concat(secondopezzo);
   return l.slice(m + 1, ).concat(l.slice(0, m));
};