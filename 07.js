function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
}

module.exports = ordenarArray;

//asi se explica el Bubble Sort
function ordenarArray(array){
let n = array.length;

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - 1 - i; j++) {
    if (array[j] > array[j + 1]) {
      // Intercambiar los elementos si están en el orden incorrecto
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

return array;
}
