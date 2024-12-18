function somma(num1, num2) {
  let maggiore = num1 > num2 ? num1 : num2;
  return maggiore;
}

console.log()

function somma(num1, num2, callback) {
  console.log(messaggio);
  x = callback(num1, num2);
  return x
}

function sommaeffetiva(n1, n2) {
  s = n1 + n2
  return s
}

// Uso della callback
operazionePrincipale(1,2, sommaeffetiva);
operazionePrincipale(3,4, sommaeffetiva);
operazionePrincipale(10,20, sommaeffetiva);
