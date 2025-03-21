export const unique_random_numbers = (n, m) => {
   if (n > m) {
      throw new Error("N cannot be greater than M");
  }

  const numbers = new Set();
  while (numbers.size < n) {
      const randomNum = Math.floor(Math.random() * m) + 1;
      numbers.add(randomNum);
  }

  return Array.from(numbers).sort((a, b) => b - a);
}


