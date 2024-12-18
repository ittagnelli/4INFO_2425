function trovaMaggiore(num1, num2) {
  let maggiore = num1 > num2 ? num1 : num2;
  return maggiore;
}

console.log(`Il numero maggiore tra ${5} e ${10} è ${trovaMaggiore(5, 10)}.`);
console.log(`Il numero maggiore tra ${11} e ${6} è ${trovaMaggiore(11, 6)}.`);
console.log(`Il numero maggiore tra ${0} e ${8} è ${trovaMaggiore(0, 9)}.`);
