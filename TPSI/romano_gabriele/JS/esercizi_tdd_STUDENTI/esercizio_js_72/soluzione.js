export class Studente {
  constructor(nome, classe){
    this.n = nome;
    this.c = classe;
  }
}

export class Docente {
  constructor(nome, classe){
    this.n = nome;
    this.c = classe;
  }
}

export const confrontaOBJ = (obj1, obj2) => {
  return obj1.constructor === obj2.constructor && obj1.n === obj2.n && obj1.c === obj2.c;
};
