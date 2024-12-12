const Animal = {
  type: "Rettile",
  color: "Verde",
  weight: 5,

  speak() {
      console.log("Razza: " + this.type + "!");
  },
  size() {
      console.log("Peso: " + this.weight + " kg");
  },
  color() {
      console.log("Colore: " + this.color + "!");
  },
  enumera() {
      console.log(Object.keys(this));
  }
};

const Car = {
  marca: "Ferrari",
  modello: "Z1",
  velocitaMassima: 350,

  speak() {
      console.log("Marca: " + this.smarca + "!");
  },
  size() {
      console.log("Velocità Max: " + this.velocitaMassima + " km/h!");
  },
  model() {
      console.log("Modello: " + this.modello + "!");
  },
  enumera() {
      console.log(Object.keys(this));
  }
};

const Polygon = {
  numeroLati: 8,
  lunghezzaLato: 4,
  colore: "Rosso",

  speak() {
      console.log("Lati: " + this.numeroLati + "!");
  },
  size() {
      console.log("Lunghezza lati: " + this.lunghezzaLato + " cm!");
  },
  color() {
      console.log("Colore: " + this.colore + "!");
  },
  enumera() {
      console.log(Object.keys(this));
  }
};


console.log("Poligono:");
Polygon.speak();
Polygon.size();
Polygon.color();
Polygon.enumera();

console.log("\nAnimale:");
Animal.speak();
Animal.size();
Animal.model();
Animal.enumera();

console.log("\nMacchina:");
Car.speak();
Car.size();
Car.color();
Car.enumera();
Footer