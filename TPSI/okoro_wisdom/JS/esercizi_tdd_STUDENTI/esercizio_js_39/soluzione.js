export const reverse = (l) => {
   let array = []
   let e = 0
   l.forEach((item,i) => {
        array[l.length -1 -i] = item
        e = item + e
   });
   array.unshift(e)

   return array
}