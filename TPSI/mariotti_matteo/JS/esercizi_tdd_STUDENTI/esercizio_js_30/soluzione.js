export const tronca = (str, l) => {
if (str.length > l) {
    return str.substring(0, l) + '...';
}
return str;
}