function trovaMaggiore(num1, num2, num3) {
  let maggiore = num1 > num2 
    ? (num1 > num3 ? num1 : num3) 
    : (num2 > num3 ? num2 : num3);
  return maggiore;
}

// Esempio di utilizzo
let numero1 = 7;
let numero2 = 15;
let numero3 = 10;

console.log(`Il numero maggiore tra ${numero1}, ${numero2} e ${numero3} è ${trovaMaggiore(numero1, numero2, numero3)}.`);

let numero4 = 30;
let numero5 = 10;
let numero6 = 20;

console.log(`Il numero maggiore tra ${numero4}, ${numero5} e ${numero6} è ${trovaMaggiore(numero4, numero5, numero6)}.`);

let numero7 = 1;
let numero8 = 2;
let numero9 = 3;

console.log(`Il numero maggiore tra ${numer7}, ${numero8} e ${numero9} è ${trovaMaggiore(numero7, numero8, numero9)}.`);
