export const only_upper = (s) => {
    s = Array.from(s);
    let maiuscole = s.filter((lettera) => lettera != lettera.toLowerCase());
    return maiuscole.filter((item) => item != ' ');

};
