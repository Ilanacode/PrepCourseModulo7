function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
}

module.exports = encontrarNumeroFaltante;

//esto necesita array.sort
function encontrarNumeroFaltante(numeros) {
  // Check if the array is empty
  if (numeros.length === 0) {
    return null;
  }
  
  // Sort the array to ensure it is in ascending order
  numeros.sort((a, b) => a - b);
  
  // Loop through the array and check for the missing number
  for (let i = 0; i < numeros.length - 1; i++) {
    // If the difference between consecutive numbers is greater than 1, return the missing number
    if (numeros[i + 1] !== numeros[i] + 1) {
      return numeros[i] + 1;
    }
  }
  
  // If no number is missing, return null
  return null;
}
