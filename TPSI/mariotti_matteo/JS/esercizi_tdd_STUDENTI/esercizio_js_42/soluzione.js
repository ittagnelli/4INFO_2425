import { exit } from "process";

export const swap = (l, n, m) => {
    const element = l.splice(n, 1)[0];
    l.splice(m, 0, element);
    return l;
};
