// function invertirTexto(texto) {
//   // La función recibe un argumento "texto" que es un string.
//   // Tu objetivo es invertir el string y devolver el string invertido.
//   // Tu código:
// }

// module.exports = invertirTexto;
// push [i]
//for i --
//"guitarra"
//"arratiug"
//la verdad es unshift no push

// function invertirTexto(texto){
//   for (var i = 0; i <= texto.length; i--){
//     texto.unshift[i];
//   }
// }

// console.log(invertirTexto("texto"));
// al preguntarle a chatgpt, existe el metodo .reverse
function invertirTexto(texto){
  return texto.split('').reverse('').join('');
}

//con un for loop yo me acrecaba a la respuesta pero use unshift y texto.unshift[i] me dio un error

function invertirTexto(texto) {
  // Initialize an empty string to store the reversed text
  let textoInvertido = '';
  
  // Loop through the string from the last character to the first
  for (let i = texto.length - 1; i >= 0; i--) {
    // Add each character to the new string in reverse order
    textoInvertido += texto[i];
  }
  
  // Return the reversed string
  return textoInvertido;
}

