export const count_vocals = (str) => {
    const mappaVocali = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
      };
      str = str.toLowerCase();
      for (let char of str) {
        if (mappaVocali[char] !== undefined) {
          mappaVocali[char]++;
        }
      }
      return mappaVocali;
}

