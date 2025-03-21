export class Automobile {
    constructor() {
        this.brand = "";
        this.model = "";
        this.year = 0;
        this.color = "";
        this.cc = 0;
    }

    description() {
        return `${this.brand} ${this.model} (${this.year}) - Color: ${this.color}, CC: ${this.cc}`;
    }

    start() {
        return `${this.brand} ${this.model} is starting...`;
    }

    stop() {
        return `${this.brand} ${this.model} is stopping...`;
    }
}