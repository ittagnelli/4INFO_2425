export const swap = (l, n, m) => {
    let arr = [];

    l.forEach((e,i) => {
        if(i == n)
            arr.push(l[m])
        else if(i == m)
            arr.push(l[n])
        else
            arr.push(e)
    });

    return arr;
};
