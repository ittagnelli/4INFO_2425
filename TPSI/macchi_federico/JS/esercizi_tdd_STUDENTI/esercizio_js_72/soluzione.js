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
  return JSON.stringify(obj1) == JSON.stringify(obj2) || JSON.stringify(obj1) == JSON.stringify(obj2)
};
