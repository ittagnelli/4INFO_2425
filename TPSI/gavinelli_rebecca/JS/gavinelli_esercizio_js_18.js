function maggiore(a, b, c) {
    return a > b ? (a > c ? a : c) : (b > c ? b : c);
}
function main() {
    console.log("Primo test:");
    console.log(maggiore(5, 10, 3));  
    console.log("Secondo test:");
    console.log(maggiore(12, 7, 19)); 
    console.log("Terzo test:");
    console.log(maggiore(8, 8, 8));   
} main();
