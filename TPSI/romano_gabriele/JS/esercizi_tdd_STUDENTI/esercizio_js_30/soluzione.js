export const tronca = (str, l) => {
    if(str.length > l) {
        str = str.slice(0, l);
        str += "...";
    }

    return str;
}
