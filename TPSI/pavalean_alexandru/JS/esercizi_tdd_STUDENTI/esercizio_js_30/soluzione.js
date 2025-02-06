export const tronca = (str, l) => {
    let stringa_estratta = str.slice(l, 1000)
    return str.replace(stringa_estratta, '...')
}
