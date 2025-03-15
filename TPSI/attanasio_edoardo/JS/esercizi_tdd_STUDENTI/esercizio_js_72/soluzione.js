export class Studente {
  //INSERISCI QUI IL TUO CODICE
  constructor(nome, classe){
    this.n = nome;
    this.c = classe;
  }
}

export class Docente {
  //INSERISCI QUI IL TUO CODICE
  constructor(nome, classe){
    this.n = nome;
    this.c = classe;
  }
}

export const confrontaOBJ = (obj1, obj2) => {
  //INSERISCI QUI IL TUO CODICE
  // return obj1.constructor === obj2.constructor && obj1.n === obj2.n && obj1.c === obj2.c ; 
  return (obj1 instanceof (Studente || Docente) && obj2 instanceof (Studente || Docente) && JSON.stringify(obj1) === JSON.stringify(obj2))
};
