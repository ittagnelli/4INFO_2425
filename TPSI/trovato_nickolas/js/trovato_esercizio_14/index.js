// Funzione per calcolare la differenza tra due orari
function calcolaDifferenzaOrari(orario1, orario2) {
    // Converti gli orari in millisecondi dal mezzanotte
    const toMilliseconds = (orario) =>
        orario.h * 3600000 + orario.m * 60000 + orario.s * 1000;

    const ms1 = toMilliseconds(orario1);
    const ms2 = toMilliseconds(orario2);

    // Differenza assoluta
    const differenzaMs = Math.abs(ms1 - ms2);

    return {
        millisecondi: differenzaMs,
        secondi: Math.floor(differenzaMs / 1000),
        minuti: Math.floor(differenzaMs / 60000),
        ore: Math.floor(differenzaMs / 3600000),
    };
}

// Main per verificare il funzionamento
function mostraRisultati() {
    const output = document.getElementById("output");

    // Esempi di orari
    const orario1 = { h: 14, m: 30, s: 0 };
    const orario2 = { h: 16, m: 45, s: 30 };
    const orario3 = { h: 8, m: 0, s: 0 };

    // Chiamate alla funzione
    const risultati = [
        { orari: [orario1, orario2], output: calcolaDifferenzaOrari(orario1, orario2) },
        { orari: [orario1, orario3], output: calcolaDifferenzaOrari(orario1, orario3) },
    ];

    // Mostra risultati nella console
    risultati.forEach((risultato, index) => {
        console.log(`Risultato ${index + 1}:`, risultato.output);
    });

    // Mostra risultati nel DOM
    output.innerHTML = risultati
        .map(
            (risultato, index) =>
                `<p><strong>Risultato ${index + 1}:</strong><br>
                 Orario 1: ${JSON.stringify(risultato.orari[0])}<br>
                 Orario 2: ${JSON.stringify(risultato.orari[1])}<br>
                 Millisecondi: ${risultato.output.millisecondi}<br>
                 Secondi: ${risultato.output.secondi}<br>
                 Minuti: ${risultato.output.minuti}<br>
                 Ore: ${risultato.output.ore}</p>`
        )
        .join("");
}

// Esegui il main
mostraRisultati();
