//function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
//}

module.exports = agregarItemAlComienzoDelArray;
function agregarItemAlComienzoDelArray(array, elemento){
  array.unshift(elemento);
  console.log(array);
  return array;
}

agregarItemAlComienzoDelArray([2,3,4], 1);

