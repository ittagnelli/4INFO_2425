export const swap = (l, n, m) => {
    if (n < 0 || n >= l.length || m < 0 || m >= l.length) return l;
    
    [l[n], l[m]] = [l[m], l[n]];
    return l;
  };
  