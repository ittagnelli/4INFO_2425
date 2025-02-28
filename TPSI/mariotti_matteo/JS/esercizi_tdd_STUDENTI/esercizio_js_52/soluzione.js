export const psw_gen = (len) => {
    function generateRandomArray() {
        const characters = [];
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'; // Lettere minuscole e numeri
        const length = chars.length;
    
        for (let i = 0; i < 7; i++) {
            const randomIndex = Math.floor(Math.random() * length); // Genera un indice casuale
            characters.push(chars[randomIndex]); // Aggiungi il carattere corrispondente all'indice
        }
    
        return characters;
    }
    
    return generateRandomArray().join('');
};