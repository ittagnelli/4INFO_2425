class Studente {
  constructor(nome, id) {
      this.nome = nome;
      this.id = id;
  }
}

class Docente {
  constructor(nome, id) {
      this.nome = nome;
      this.id = id;
  }
}

const confrontaOBJ = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

function process_form(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const id = document.getElementById("id").value;
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  let persona;
  if (tipo === "studente") {
      persona = new Studente(nome, id);
  } else {
      persona = new Docente(nome, id);
  }

  console.log("Oggetto creato:", persona);
}

document.getElementById("userForm").addEventListener("submit", process_form);
