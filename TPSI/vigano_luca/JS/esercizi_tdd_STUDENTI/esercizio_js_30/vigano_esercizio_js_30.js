export const tronca = (str, l) => {
    str = str.slice(0, l) + "." + "." + "."
    return str
}
