// function promedioResultadosTest(resultadosTest) {
//   // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
//   // Tu código:
// }

module.exports = promedioResultadosTest;
function promedioResultadosTest(resultadosTest){
  let suma = 0;
  for (let i =0 ; i < resultadosTest.length; i++){
  suma += resultadosTest[i];
}
return (suma/resultadosTest.length);

}

console.log(promedioResultadosTest([1,2,3,4,5]));
