//function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
//}

//module.exports = obtenerElementoAleatorio;
// Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
function obtenerElementoAleatorio(array) {
   
   let indiceAleatorio = Math.floor(Math.random() * array.length);
   return array[indiceAleatorio];
 }

 obtenerElementoAleatorio([]);

