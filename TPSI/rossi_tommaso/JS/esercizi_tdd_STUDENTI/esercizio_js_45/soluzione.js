export const only_upper = (s) => {
    return s.split('').filter(element => condition(element)).join(',');
};


const condition = (c) => {
    return c.charCodeAt() >= 65 && c.charCodeAt() <= 90;
}