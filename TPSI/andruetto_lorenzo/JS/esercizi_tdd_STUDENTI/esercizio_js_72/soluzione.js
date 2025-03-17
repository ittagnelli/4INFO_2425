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
  return JSON.stringify(obj1) == JSON.stringify(obj2);
};