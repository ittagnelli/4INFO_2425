export const upper_case = (str) => {
    const dividi = str.split(' ')
    for (let i = 1; i < dividi.length; i++) {
        dividi[i] = words[i].charAt(0).toUpperCase() + dividi[i].slice(1);
    }
   return dividi.join(" ")
}

