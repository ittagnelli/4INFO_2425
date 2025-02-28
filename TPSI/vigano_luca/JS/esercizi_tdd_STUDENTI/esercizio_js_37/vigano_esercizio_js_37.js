export const rm_string = (s, r) => {
    const index = s.indexOf(r);
    if (index !== -1) {
        return s.slice(0, index) + s.slice(index + r.length);
    }
    return s;
};