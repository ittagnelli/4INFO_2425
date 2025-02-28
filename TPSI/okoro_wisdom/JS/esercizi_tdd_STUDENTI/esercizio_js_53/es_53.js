export const shuffle = (l, m) => {
    return [...l.slice(m + 1), ...l.slice(0, m + 1)];
};
