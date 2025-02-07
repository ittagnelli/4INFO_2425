export const tronca = (str, l) => {
    return l < str.length ? str.slice(0, l) + '...' : str.slice(0, l);
} 
