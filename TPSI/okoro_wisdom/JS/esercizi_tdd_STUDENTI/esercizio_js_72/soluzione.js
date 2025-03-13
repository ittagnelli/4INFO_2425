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
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};


let studente = new Studente("Mario", 4);
let docente = new Docente("Mario", 4);

console.log(confrontaOBJ(studente, docente)); 
