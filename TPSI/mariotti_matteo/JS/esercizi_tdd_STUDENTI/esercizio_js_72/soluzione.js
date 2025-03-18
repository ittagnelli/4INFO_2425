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
   // return obj1.nome === obj2.nome && obj1.eta === obj2.eta;

  return (
    ((obj1 instanceof Studente) && (obj2 instanceof Studente)) || ((obj1 instanceof Docente) && (obj2 instanceof Docente))
  ) && JSON.stringify(obj1) === JSON.stringify(obj2);
};
