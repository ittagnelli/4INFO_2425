export class Studente {
  constructor(nome, id) {
      this.nome = nome;
      this.id = id;
  }
}

export class Docente {
  constructor(nome, id) {
      this.nome = nome;
      this.id = id;
  }
}

export const confrontaOBJ = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};