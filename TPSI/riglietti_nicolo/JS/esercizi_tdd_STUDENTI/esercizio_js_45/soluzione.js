export const only_upper = (s) => {

    let s2 = []

    s.split('').forEach(val => {
        if(val === val.toUpperCase() && val !== val.toLowerCase())
            s2.push(val)
    });

    return s2;
};
