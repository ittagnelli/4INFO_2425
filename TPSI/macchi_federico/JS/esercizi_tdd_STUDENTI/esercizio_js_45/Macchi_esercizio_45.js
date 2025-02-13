export const only_upper = (s) => {
    //let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    //let letters = [];
    let c = s.split("")
    
    //Array(26).fill(0).forEach((item, i) => letters[i] = String.fromCharCode(65 + i));
    //return c.filter((item) => letters.includes(item));
    return c.filter((item) => (item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90));
    
};
