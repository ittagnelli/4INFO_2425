function invertiArray(arr) {
    let risultato = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        risultato.push(arr[i]);
    }
    return risultato;
}

x