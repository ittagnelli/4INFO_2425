export const psw_gen = (len) => {
   const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
   return Array.from({length: len}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
};
