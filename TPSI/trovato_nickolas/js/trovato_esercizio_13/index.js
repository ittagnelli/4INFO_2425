// Funzione per calcolare la somma di tutti i numeri tra 0 e n
function sommaDaZeroAN(n) {
    // Conversione a numero, se necessario
    n = parseInt(n, 10);
    if (isNaN(n) || n < 0) {
        return "Errore: il parametro deve essere un intero positivo.";
    }

    let somma = 0;
    for (let i = 0; i <= n; i++) {
        somma += i;
    }
    return somma;
}

// Funzione per mostrare i risultati nel DOM e in console
function mostraRisultati() {
    const output = document.getElementById("output");

    // Chiamate alla funzione con diversi parametri
    const risultati = [
        { input: 5, output: sommaDaZeroAN(5) },
        { input: "10", output: sommaDaZeroAN("10") },
        { input: -3, output: sommaDaZeroAN(-3) },
    ];

    // Mostra risultati nella console
    risultati.forEach(r => {
        console.log(`Input: ${r.input}, Output: ${r.output}`);
    });

    // Mostra risultati nel DOM
    output.innerHTML = risultati
        .map(r => `<p>Input: ${r.input}, Output: ${r.output}</p>`)
        .join("");
}

// Esegui il main per verificare la funzione
mostraRisultati();
