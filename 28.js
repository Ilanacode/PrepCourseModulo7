function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
}

module.exports = esArrayNoVacio;

function esArrayNoVacio(arr) {
  // Check if the argument is an array and if it has at least one element
  if (Array.isArray(arr) && arr.length > 0) {
    return true;
  } else {
    return false;
  }
}

