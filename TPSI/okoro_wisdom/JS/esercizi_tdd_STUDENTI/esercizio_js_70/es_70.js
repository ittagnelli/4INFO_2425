export class Calcolatrice {
    somma(a, b) {
        return a + b;
    }
    sottrazione(a, b) {
        return a - b;
    }
    moltiplicazione(a, b) {
        return a * b;
    }
    divisione(a, b) {
        return b !== 0 ? a / b : "Errore: divisione per zero";
    }
    calcolaEspressione(espressione) {
        let elementi = espressione.split(" ");
        let risultato = parseFloat(elementi[0]);
        for (let i = 1; i < elementi.length; i += 2) {
            let operatore = elementi[i];
            let numero = parseFloat(elementi[i + 1]);
            switch (operatore) {
                case "+": risultato = this.somma(risultato, numero); break;
                case "-": risultato = this.sottrazione(risultato, numero); break;
                case "*": risultato = this.moltiplicazione(risultato, numero); break;
                case "/": risultato = this.divisione(risultato, numero); break;
                default: return "Errore";
            }
        }
        return risultato;
    }
}

const calc = new Calcolatrice();
console.log(calc.calcolaEspressione("6 - 2 * 5 + 8 / 4"));
console.log(calc.calcolaEspressione("11 * 3 + 5 - 5 / 11"));
console.log(calc.calcolaEspressione("29 + 2 - 7 / 3 / 2 + 1 * 2"));
