function massimoDiTre(a, b, c) {
    return (a > b ? (a > c ? a : c) : (b > c ? b : c));
}

function main() {
    console.log("Il massimo tra 3, 7 e 5 è: " + massimoDiTre(3, 7, 5));
    console.log("Il massimo tra 10, 2 e 15 è: " + massimoDiTre(10, 2, 15));
    console.log("Il massimo tra -1, -5 e -3 è: " + massimoDiTre(-1, -5, -3));
}

main();
