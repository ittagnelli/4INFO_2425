export const shuffle = (l, m) => {
   if(m > 0)
      return Array().concat(l.splice(m + 1, l.length - 1), l.splice(0, m));
   else {
      console.log(l);
      console.log(l.reverse()[m]);
      console.log(l.splice(0, l.reverse()[m]));
      return Array().concat(l.splice(l.reverse()[m + 1], l.length - 1), l.splice(0, l.reverse()[m]));
   }
};