export function is_anagram(arr) {
  const mappa = {}
  for(let k of arr){
    let sortword = k.split('').sort('').join('')
    mappa[sortword].push(k)
  }
return Set(mappa)   


}