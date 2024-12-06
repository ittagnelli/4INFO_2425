

// Definizione degli oggetti usando Object Literals
const Animale = {
    nome: "Leone",
    habitat: "Savana",
    dieta: "Carnivoro",
    verso: function () {
        return "Ruggisce";
    },
    dorme: function () {
        return "Dormire per 20 ore al giorno";
    },
    enumera: function () {
        console.log(Object.keys(this));
    },
};

const Automobile = {
    marca: "Tesla",
    modello: "Model S",
    alimentazione: "Elettrica",
    accendi: function () {
        return "L'auto è accesa.";
    },
    accelera: function () {
        return "Accelerazione istantanea!";
    },
    enumera: function () {
        console.log(Object.keys(this));
    },
};

const Poligono = {
    tipo: "Triangolo",
    lati: 3,
    angoli: "Acuto",
    area: function () {
        return "Calcola l'area del triangolo.";
    },
    perimetro: function () {
        return "Somma delle lunghezze dei lati.";
    },
    enumera: function () {
        console.log(Object.keys(this));
    },
};

// Creazione di istanze e chiamata del metodo enumera()
const output = document.getElementById("output");

const leone = Object.create(Animale);
leone.enumera();

const tigre = Object.create(Animale);
tigre.enumera();

const tesla = Object.create(Automobile);
tesla.enumera();

const fiat = Object.create(Automobile);
fiat.enumera();

const triangolo = Object.create(Poligono);
triangolo.enumera();

const quadrato = Object.create(Poligono);
quadrato.enumera();

// Output nel DOM
output.innerHTML = `
    Controlla la console per vedere i nomi degli attributi enumerati!
`;
