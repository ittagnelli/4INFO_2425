export const unique_random_numbers = (n, m) => {
   //INSERISCI QUI IL TUO CODICE
      let set = new Set(); 
      let array = Array(n); 
      for (let i of array) {
         set.add(Math.floor(Math.random() * m) + 1);
       }
      return Array.from(set).sort((a, b) => b - a); 
};

   

