export const scambiaPrimiDue = (str1, str2) => {
    if (str1.length < 2 || str2.length < 2) return "Le stringhe devono avere almeno due caratteri";
    
    const nuovaStr1 = str2.slice(0, 2) + str1.slice(2);
    const nuovaStr2 = str1.slice(0, 2) + str2.slice(2);
    
    return nuovaStr1 + " " + nuovaStr2;
};
