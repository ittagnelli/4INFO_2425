export class Calcolatrice {
    constructor() {}

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Divisione per zero non consentita");
        }
        return a / b;
    }

    evaluate(expression) {
        try {
            return new Function(`return ${expression}`)();
        } catch (error) {
            throw new Error("Espressione non valida");
        }
    }
}

const calcolatrice = new Calcolatrice();

const expressions = [
    "6 - 2 * 5 + 8 / 4",
    "11 * 3 + 5 - 5 / 11"
];

expressions.forEach(expression => {
    console.log(`${expression} = ${calcolatrice.evaluate(expression)}`);
});
