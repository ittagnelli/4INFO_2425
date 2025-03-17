function azzeraMultipliDiN(array, N) {
    return array.map(num => num % N === 0 ? 0 : num);
  }
