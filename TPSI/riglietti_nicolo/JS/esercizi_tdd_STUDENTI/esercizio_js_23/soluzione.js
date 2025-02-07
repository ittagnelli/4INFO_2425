export const abbreviazione = (str) => {
    let list = str.split(' ');
    return `${list[0].charAt(0).toUpperCase() + list[0].slice(1)} ${list[1].charAt(0).toUpperCase() + '.'}`;
}

