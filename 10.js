//function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
//}

//module.exports = obtenerPrimerStringLargo;
var arrayDeStrings = ['Catapulta', 'soyhenry', 'javascript', 'rinoceronte', 'tres'];

function obtenerPrimerStringLargo(array){
for (var i=0; i<array.length; i++){
  if (typeof array[i]=== 'string' && array[i].length > 5){
    console.log(array[i]);
    return array[i];
    
  }
}

}

obtenerPrimerStringLargo(arrayDeStrings);
