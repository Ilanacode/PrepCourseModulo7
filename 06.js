// function invertirArray(array) {
//   // Invierte el arreglo array recibido por argumento.
//   // Tu código:
// }

// module.exports = invertirArray;
// //function invertirArray(array) {
//   // Invierte el arreglo array recibido por argumento.
//   // Tu código:
function invertirArray(array){
  // let array = [];
  
  for (let i = array.length - 1; i >= 0; i--) {
    array.push(array[i]);
  }
  console.log(array);
  return array;
}

invertirArray([1,2,3,4,5]);
