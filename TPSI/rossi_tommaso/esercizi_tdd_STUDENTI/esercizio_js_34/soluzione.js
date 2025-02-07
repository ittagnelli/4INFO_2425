export const insert = (str1, agg, pos) => {
    if (str1[pos] == ' ' )
        return str1.slice(0, pos) + ' ' + agg + str1.slice(pos);
    else 
        return str1.slice(0, pos) + ' ' + agg + ' ' + str1.slice(pos);

};
