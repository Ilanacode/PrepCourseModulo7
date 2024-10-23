function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
}

module.exports = multiplicarElementosPorIndice;
function multiplicarElementosPorIndice(array){
let elemento = array[0];
let contador = 0;

for (let i = 0; i < array.length; i++){
elemento = array[i]* i;
contador++;

}
}

function multiplicarElementosPorIndice(array) {
  // Create a new array to store the results
  let nuevoArray = [];
  
  // Loop through each element in the array
  for (let i = 0; i < array.length; i++) {
    // Multiply the element by its index and store the result in the new array
    nuevoArray.push(array[i] * i);
  }
  
  // Return the new array with the results
  return nuevoArray;
}