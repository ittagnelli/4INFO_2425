function maggiore(a, b) {
    return (a > b) ? a : b;
}

function main() {
    console.log("Risultati delle chiamate alla funzione maggiore:");
    console.log(`Maggiore tra 5 e 10: ${maggiore(5, 10)}`);   
    console.log(`Maggiore tra 20 e 15: ${maggiore(20, 15)}`); 
    console.log(`Maggiore tra -5 e -3: ${maggiore(-5, -3)}`); 
}

main();


