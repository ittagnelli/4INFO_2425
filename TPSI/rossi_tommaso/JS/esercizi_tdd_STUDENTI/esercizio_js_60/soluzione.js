export function is_anagram(arr) {
    let res = arr.map(element => element.toLowerCase().split('').sort().join('')).reverse()
    res = res.map((e,i) => {
        if(res.indexOf(e) == i)
            return true;
        return false
    }).reverse();
    return arr.filter((_,i) => res[i]);
}
