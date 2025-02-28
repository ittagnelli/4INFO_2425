export const ordina = (l) => {
    return l.sort((a, b) => b.titolo.localeCompare(a.titolo));
  };