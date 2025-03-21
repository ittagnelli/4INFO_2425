export class Automobile {
    constructor(brand, model, year, color, cc) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.cc = cc;
    }

    start() {
        return `${this.brand} ${this.model} is starting.`;
    }

    drive() {
        return `${this.brand} ${this.model} is driving.`;
    }

    stop() {
        return `${this.brand} ${this.model} is stopping.`;
    }
}

const car1 = new Automobile("Honda", "Civic Type R", 2023, "Red", 3000);
const car2 = new Automobile("Toyota", "Supra", 2022, "Blue", 3400);
const car3 = new Automobile("Ford", "Mustang", 2021, "Black", 5000);
const car4 = new Automobile("Chevrolet", "Camaro", 2020, "Yellow", 6200);
const car5 = new Automobile("Nissan", "GT-R", 2023, "White", 3800);

console.log(car1.start());
console.log(car1.drive());
console.log(car1.stop());

console.log(car2.start());
console.log(car2.drive());
console.log(car2.stop());

console.log(car3.start());
console.log(car3.drive());
console.log(car3.stop());

console.log(car4.start());
console.log(car4.drive());
console.log(car4.stop());

console.log(car5.start());
console.log(car5.drive());
console.log(car5.stop());