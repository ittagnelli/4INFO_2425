function orarioMinore(orario1, orario2, orario3) {
    function inSecondi(orario) {
        return orario.h * 3600 + orario.m * 60 + orario.s;
    }

    const sec1 = inSecondi(orario1);
    const sec2 = inSecondi(orario2);
    const sec3 = inSecondi(orario3);

    if (sec1 <= sec2 && sec1 <= sec3) return orario1;
    if (sec2 <= sec1 && sec2 <= sec3) return orario2;
    return orario3;
}

console.log("Risultato funzione orarioMinore:");

const test1 = [
    { h: 1, m: 30, s: 0 },
    { h: 0, m: 45, s: 0 },
    { h: 2, m: 0, s: 0 }
];

const test2 = [
    { h: 0, m: 0, s: 15 },
    { h: 0, m: 0, s: 10 },
    { h: 0, m: 0, s: 20 }
];

console.log("Test 1:", orarioMinore(test1[0], test1[1], test1[2]));
console.log("Test 2:", orarioMinore(test2[0], test2[1], test2[2]));
