export const no_copies = (array) => {
   return array.filter((element, index, self) =>  self.indexOf(element) === index);
}
