export function is_anagram(arr) {
    let insieme = new Set();
    return (arr.reverse().filter(word => insieme.has(word.toLowerCase().split('').sort().join('')) == true ? false : insieme.add(word.toLowerCase().split('').sort().join('')))).reverse();
}
