export const map_arr = (l, n) => {
    l = l.map(num => {
        if(num % n == 0)
            num = 0;
        else
            return num;
    })

    return l;
};
