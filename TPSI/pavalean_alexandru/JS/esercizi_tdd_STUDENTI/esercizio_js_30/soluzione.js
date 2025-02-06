export const tronca = (str, l) => {
    let stringa_estratta = str.slice(l, str.lenght)
    return str.replace(stringa_estratta, '...')
}
