function prodottoDeiQuadrati(array) {
    return array
      .map(num => num * num)  
      .reduce((prodotto, numQuadrato) => prodotto * numQuadrato, 1); 
    }
  