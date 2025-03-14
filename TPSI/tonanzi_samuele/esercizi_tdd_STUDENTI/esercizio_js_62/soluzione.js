export const unique_random_numbers = (n, m) => {
   //INSERISCI QUI IL TUO CODICE
   let arr = new Set()

   while (arr.size < n)
      arr.add(Math.floor(Math.random()* m) + 1)

   return Array.from(arr).sort((a,b) => b - a )
   
}
