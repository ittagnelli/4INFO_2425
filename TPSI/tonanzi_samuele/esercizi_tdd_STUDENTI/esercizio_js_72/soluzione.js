export class Studente {
  constructor(nome, classe){
    this.nome = nome
    this.classe = classe
  }
}
export class Docente {
  constructor(nome, classe){
    this.nome = nome
    this.classe = classe
  }
}
export const confrontaOBJ = (a, b) => { 
  return a.constructor === b.constructor && a.nome === b.nome && a.classe === b.classe 
};