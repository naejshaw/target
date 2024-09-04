function countLetterA(text) {
  const lowerText = text.toLowerCase();
  
  const occurrences = lowerText.match(/a/g);
  
  if (occurrences !== null) {
    return `A letra 'a' aparece ${occurrences.length} vezes.`;
  } else {
    return "A letra 'a' não foi encontrada.";
  }
}

function countLettersAWithAccent(text) {
    const regex = /a|á|à|ã|â/gi;
  
    const occurrences = text.match(regex);
  
    return `A letra 'a' (com ou sem acento) aparece ${occurrences ? occurrences.length : 0} vezes.`;
  }

// Ex.:
const myString = "Olá, mundão! A letra 'a' é muito comum.";
const resultado = countLetterA(myString);
console.log(resultado);
const resultado2 = countLettersAWithAccent(myString);
console.log(resultado2);