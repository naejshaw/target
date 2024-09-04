function isFibonacci(num) {
    if (num === 0 || num === 1) {
      return true;
    }
  
    let a = 0;
    let b = 1;
  
    while (b <= num) {
      let c = a + b;
      a = b;
      b = c;
  
      if (b === num) {
        return true;
      }
    }
  
    return false;
  }
  
  // Ex.:
  const numero = 135;
  if (pertenceFibonacci(numero)) {
    console.log(numero + " pertence à sequência de Fibonacci.");
  } else {
    console.log(numero + " não pertence à sequência de Fibonacci.");
  }