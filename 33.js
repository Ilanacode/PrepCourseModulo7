// function combine(str1, str2, str3) {
//   // Esta función debe combinar de forma alternada cada caracter de cada string.
//   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
//   // Los strings pueden tener cualquier tamaño.
//   // EJEMPLOS
//   // combine("abc", "", "123") == "a1b2c3"
//   // combine("abc", "12345", "") == "a1b2c345"
//   // combine("abc", "12345", "67") == "a16b27c345"
//   // Tu código:
// }

// module.exports = combine;
// if arr === null
// return
// // primero recibir strings y convertirlos en arrays. split
// //luego si el array esta vacion return null
// //por ultimo join
// //pero... for para alternarlos?

// function alternarElementos(str1, str2, str3) {
//   // Create an empty string to store the result
//   let resultado = '';
  
//   // Loop through each character in the string
//   for (let i = 0; i < str.length; i++) {
//     // If the index is even, convert the character to uppercase
//     if (i % 2 === 0) {
//       resultado += str[i].toUpperCase();
//     } 
//     // If the index is odd, convert the character to lowercase
//     else {
//       resultado += str[i].toLowerCase();
//     }
//   }
  
//   // Return the final string with alternating cases
//   return resultado;
// }

// console.log(alternarElementos("hola", "soy", "henry"));
function combine(str1, str2, str3) {
  // Create an empty string to store the result
  let resultado = '';
  
  // Find the length of the longest string
  let maxLength = Math.max(str1.length, str2.length, str3.length);
  
  // Loop through each position up to the longest string's length
  for (let i = 0; i < maxLength; i++) {
    // Add characters from each string if they exist at index i
    if (i < str1.length) {
      resultado += str1[i];
    }
    if (i < str2.length) {
      resultado += str2[i];
    }
    if (i < str3.length) {
      resultado += str3[i];
    }
  }
  
  // Return the combined result
  return resultado;
}
console.log(combine("Hola", "Soy", "Henry"));

