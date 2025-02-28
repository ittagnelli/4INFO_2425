export const only_upper = (s) => {
    let arr = s.split('');
    let uppers = [];
    arr.forEach((l, index) => {
        if(s.charCodeAt(index) >= 65 && s.charCodeAt(index) <= 90)
            uppers.push(l);
    });

    return uppers;
};
