export const only_upper = (s) => {
    return s.split('').filter((carattere) => carattere.charCodeAt(0) >= 65 && carattere.charCodeAt(0) <= 90)
};
