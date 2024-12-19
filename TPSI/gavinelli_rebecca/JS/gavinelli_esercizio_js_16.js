function orarioMinore(orario1, orario2, orario3) {
    const toSeconds = (orario) => orario.h * 3600 + orario.m * 60 + orario.s;

    const orari = [orario1, orario2, orario3];
    let minOrario = orari[0];

    for (let i = 1; i < orari.length; i++) {
        if (toSeconds(orari[i]) < toSeconds(minOrario)) {
            minOrario = orari[i];
        }
    }

    return minOrario;
}

function main() {
    const orario1 = { h: 8, m: 30, s: 15 };
    const orario2 = { h: 7, m: 45, s: 30 };
    const orario3 = { h: 9, m: 15, s: 0 };

    const orario4 = { h: 10, m: 0, s: 0 };
    const orario5 = { h: 8, m: 59, s: 59 };
    const orario6 = { h: 7, m: 59, s: 59 };

    console.log("Primo test:");
    console.log(orarioMinore(orario1, orario2, orario3));  
    console.log("Secondo test:");
    console.log(orarioMinore(orario4, orario5, orario6));  
}

main();
