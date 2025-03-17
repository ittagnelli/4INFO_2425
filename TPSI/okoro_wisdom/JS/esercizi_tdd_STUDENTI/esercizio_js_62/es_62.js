export const unique_random_numbers = (n, m) => {
    const numbers = new Set();

    while (numbers.size < n) {
        const randomNum = Math.floor(Math.random() * m) + 1;
        numbers.add(randomNum); 
    }

    return [...numbers].sort((a, b) => b - a); 
}
