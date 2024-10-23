//function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
//}
//este lo hice con el video y no con chat
module.exports = duplicarElementos;
function duplicarElementos(array){
  var array = array.map((num) => {return (num * 2)})
  console.log(array);
  return(array);
}
duplicarElementos([2,3,4,5,6,]);

