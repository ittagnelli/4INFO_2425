export const insert = (str1, agg, pos) => {
    let noSpazi = agg.trim();
    let primaParte = str1.slice(0,pos).trim();
    let secondaParte = str1.slice(pos).trim();
    return primaParte + ' ' + noSpazi + ' ' + secondaParte;
};
