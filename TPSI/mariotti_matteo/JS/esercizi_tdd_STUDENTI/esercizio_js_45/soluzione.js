export const only_upper = (s) => {
    let maiuscole = [];
    Array.from(s).forEach(char => {
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
            maiuscole.push(char);
        }
    });
    return maiuscole;    
};
