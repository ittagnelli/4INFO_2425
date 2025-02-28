function spostaElemento(arr, N, M) {
    const elemento = arr[N];
        arr.splice(N, 1);
    
    arr.splice(M, 0, elemento);
    
    return arr;
  }
  