export const only_upper = (s) => {
  let stringa = s.split('');
  let rimuovere_spazi = stringa.filter((lettera) => lettera === " ");
  let stringa_finale = [];
  for (let i = 0; i < stringa.length; i++) {
    if (stringa[i] === stringa[i].toUpperCase()) {
      stringa_finale.push(stringa[i]);
    }
  }
  return stringa_finale;
};
