function maggiore(n1, n2) {
    let mag = n1 > n2 ? n1 : n2;
    return mag;
  }
  
  console.log(`n maggiore tra ${11} e ${10} è ${maggiore(11, 10)}.`);
  console.log(`n maggiore tra ${1} e ${2} è ${maggiore(1, 2)}.`);
  console.log(`n maggiore tra ${20} e ${18} è ${maggiore(20, 18)}.`);