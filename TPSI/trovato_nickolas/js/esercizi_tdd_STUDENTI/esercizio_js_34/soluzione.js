export const insert = (str, insertStr, pos) => {
    return str.slice(0, pos) + insertStr + str.slice(pos);
};
