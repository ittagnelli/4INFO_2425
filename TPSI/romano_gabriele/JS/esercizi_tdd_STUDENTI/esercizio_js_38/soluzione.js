export const reverse = (l) => {
    let index = l.length;
    while (index != 0) {
        let rand = Math.floor(Math.random() * index);
        index--;
        [l[index], l[rand]] = [l[rand], l[index]];
    }
};
