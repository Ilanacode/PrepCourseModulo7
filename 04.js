//function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
//}

module.exports = agregarItemAlFinalDelArray;
function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento);
  console.log(array);
  return array;
}

agregarItemAlFinalDelArray([1,2,3], 4);
