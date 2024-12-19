function Impostare_numero_persone(macchina) {
    let persone = prompt("Inserisci le persone che ci sono in macchina ora: ");
    macchina.posti = persone; 
    if (persone == 0) {
        macchina.stato = "off";
    } else if (persone >= 1) {
        macchina.stato = "on";
    }
    return macchina;
}

function impostare_velocita(macchina) {
    let velocita = prompt("Inserisci la velocità: ");
    velocita = parseInt(velocita);
    if (velocita >= -5 && velocita <= 180) {
        macchina.velocita = velocita;
        cambia_marcia(macchina);
    } else {
        console.log("Velocità non valida. La velocità deve essere tra -5 e 180.");
    }
    return macchina;
}

function cambia_marcia(macchina) {
    if (macchina.velocita >= 0 && macchina.velocita < 20) {
        macchina.marcia = "Prima";
    } else if (macchina.velocita >= 20 && macchina.velocita < 40) {
        macchina.marcia = "Seconda";
    } else if (macchina.velocita >= 40 && macchina.velocita < 60) {
        macchina.marcia = "Terza";
    } else if (macchina.velocita >= 60 && macchina.velocita < 80) {
        macchina.marcia = "Quarta";
    } else if (macchina.velocita >= 80 && macchina.velocita < 120) {
        macchina.marcia = "Quinta";
    } else if (macchina.velocita >= 120) {
        macchina.marcia = "Sesta";
    } else if (macchina.velocita < 0) {
        macchina.marcia = "Retro";
    }
    return macchina;
}

function main() {
    const macchina = {
        posti: 0,
        velocita: 0,
        marcia: "N/A", 
        stato: "off",
    };

    console.log("Stato iniziale della macchina: ");
    console.log(macchina); 

    while (true) {  
        console.log("\nCosa vuoi fare?");
        console.log("1 - Impostare il numero di persone a bordo");
        console.log("2 - Impostare la velocità");
        console.log("3 - Uscire");

        let scelta = prompt("Inserisci la tua scelta: ");

        if (scelta == "1") {
            if (macchina.velocita < 3) { 
                Impostare_numero_persone(macchina);
                console.log("Numero di persone aggiornato: " + macchina.posti);
                console.log("Stato della macchina: " + macchina.stato);
            } else {
                console.log("Auto in movimento, non puoi cambiare il numero di persone.");
            }
        }
        else if (scelta == "2") {
            impostare_velocita(macchina);
            console.log("Velocità aggiornata: " + macchina.velocita);
            console.log("Marcia: " + macchina.marcia);
        }
        else if (scelta == "3") {
            console.log("Uscita dal programma...");
            break; 
        }
        else {
            console.log("Scelta non valida. Riprova.");
        }
    }
}

main();
