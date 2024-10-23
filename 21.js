// function mesesDelAño(array) {
//   // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
//   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
//   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
//   // Tu código:
// }

//module.exports = mesesDelAño;
function mesesDelAño(array){
  let mesesEncontrados = [];
  for (var i =0; i < array.length; i++){
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      mesesEncontrados.push(array[i]);
    }
  }  if (mesesEncontrados.length === 3) {
    return mesesEncontrados;
  } else {
    
    return "No se encontraron los meses pedidos";
  }
}

console.log(mesesDelAño(["Enero", "febrero", "Marzo", "abril", "mayo", "junio", "julio" ,"agosto", "septiembre", "octubre", "Noviembre"]));