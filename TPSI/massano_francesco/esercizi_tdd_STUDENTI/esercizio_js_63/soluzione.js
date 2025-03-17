export const unique_characters = (str) => {
    let arr = new Set(str.split(''));
    let arrayNoDuplicati = Array.from(arr);
    arrayNoDuplicati.join('');
    return arrayNoDuplicati;
}
