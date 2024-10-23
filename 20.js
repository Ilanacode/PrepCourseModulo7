// function todosIguales(array) {
//   // Si todos los elementos del arreglo son iguales, retornar true.
//   // Caso contrario, retornar false.
//   // Tu código:
// }

// module.exports = todosIguales;
function todosIguales(array) {
  
  for (let i = 1; i < array.length; i++) {
    
    if (array[i] !== array[0]) {
      return false;
    }
  }
  
  return true;
}

console.log(todosIguales([1,1,1,1,1]));
