

function untokenize(r1) {
    let r2 = r1.replaceAll(" ", "-");
    return r2;
}

function main() {
    console.log(untokenize("Germania RUsia Espania sci Dani Mocanu"));
}

main();
