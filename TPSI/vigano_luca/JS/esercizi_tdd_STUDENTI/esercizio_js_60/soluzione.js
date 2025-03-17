export function is_anagram(arr) {
    array1 = [...arr];
    fin = array1.map((parola) => parola.split("").sort().join(""));
    set = new Set(fin);
    last = [];
    for(let item of set.keys()){
        last.push(arr[fin.lastIndexOf(item)]);
    }
    console.log(last);
}  
