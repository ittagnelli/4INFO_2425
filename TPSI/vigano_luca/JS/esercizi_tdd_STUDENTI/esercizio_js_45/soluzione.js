export const only_upper = (s) => {
  let stringa = s.split('');
  let stringa_finale = [];
  for (let i = 0; i < stringa.length; i++) {
    if (stringa[i] >= 'A' && stringa[i] <= 'Z') {
      stringa_finale.push(stringa[i]);
    }
  }
  return stringa_finale;
};
