class Quadrato {
  constructor(lato) {
      this.lato = lato;
  }

  get lato() {
      return this._lato;
  }

  set lato(valore) {
      if (valore <= 0 || isNaN(valore)) {
          throw new Error("Il lato deve essere un numero positivo.");
      }
      this._lato = valore;
  }

  get perimetro() {
      return this.lato * 4;
  }

  get area() {
      return this.lato ** 2;
  }
}

function process_form(event) {
  event.preventDefault();

  try {
      const lato = parseFloat(document.getElementById("lato").value);
      const quadrato = new Quadrato(lato);

      document.getElementById("risultato").innerHTML = `
          <p>Perimetro: ${quadrato.perimetro} cm</p>
          <p>Area: ${quadrato.area} cm²</p>
      `;
  } catch (error) {
      alert(error.message);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("quadratoForm").addEventListener("submit", process_form);
});
