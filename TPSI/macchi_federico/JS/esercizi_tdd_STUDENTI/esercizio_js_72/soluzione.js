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
 

  if (obj1.constructor !== obj2.constructor) {return false};
  return JSON.stringify(obj1) === JSON.stringify(obj2);

};
