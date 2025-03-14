export class Studente {

  constructor(nome, eta) {
    this.nome = nome;
    this.eta = eta;
  }
}

export class Docente {

  constructor(nome, eta) {
    this.nome = nome;
    this.eta = eta;
  }
}

export const confrontaOBJ = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2); // confronto
};

let studente = new Studente("Matteo", 17);
let docente = new Docente("Paolo", 43);


console.log(confrontaOBJ(studente,docente));