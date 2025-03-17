export class Studente {
    constructor(nome, classe) {
      this.nome = nome;
      this.classe = classe;
  }
}

export class Docente {
    constructor(nome, classe) {
      this.nome = nome;
      this.classe = classe;
  }
}

export const confrontaOBJ = (obj1, obj2) => {
    return obj1 == obj2;
};
