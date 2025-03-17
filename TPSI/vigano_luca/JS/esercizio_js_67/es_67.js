let numbers = [3, 5, 4, 2, 6, 1];

let [one, two, three, four, five, six] = [...numbers].sort((a, b) => a - b);

console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);