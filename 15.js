// function encontrarIndiceMayor(array) {
//   // Encuentra el índice del número más grande en el array de números.
//   // Devuelve el valor de este índice.
//   // Tu código:
// }

module.exports = encontrarIndiceMayor;
function encontrarIndiceMayor(array){
  let indiceMayor = 0;
  let valorMaximo = array[0];
  for (let i =0; i < array.length; i++){
    if (array[i] > valorMaximo) {
      valorMaximo = array[i];
      indiceMayor = i;
    }
  }
  return indiceMayor;
  }

  console.log(encontrarIndiceMayor([1,2,3,4,5,6,7,8,9,10]));


