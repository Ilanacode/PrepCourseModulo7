// function contarElementosMayoresA10(array) {
//   // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
//   // Tu código:
// }

//module.exports = contarElementosMayoresA10;
function contarElementosMayoresA10(array) {

let contador = 0;
for ( let i = 0; i < array.length; i++){
if (array[i]> 10){
contador++
}
}
return contador;
}


console.log(contarElementosMayoresA10([1,2,3,4,5,6,8,9,10,12,13]));
