export class Studente {
  //INSERISCI QUI IL TUO CODICE
  constructor(name, classe) { this.name = name; this.classe = classe; };
}

export class Docente {
  //INSERISCI QUI IL TUO CODICE
  constructor(name, classe) { this.name = name; this.classe = classe; };
}

export const confrontaOBJ = (obj1, obj2) => {
  //INSERISCI QUI IL TUO CODICE 
  return (
    ((obj1 instanceof Studente && obj2 instanceof Studente) ||
    (obj1 instanceof Docente && obj2 instanceof Studente) && 
    (JSON.stringify(obj1) == JSON.stringify(obj2))
  ))
  // return JSON.stringify(obj1) == JSON.stringify(obj2);
};