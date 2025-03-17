export const tronca = (str, l) => {

    return str.length < l ? str : str.slice(0, l) + '...';    
}
