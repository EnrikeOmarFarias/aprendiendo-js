var hola = "hello word";
let hello = "hola mundo";
console.log(hola);
console.log(hello);
console.log(window);
console.log(window.hola);
console.log(window.hello);
//Ambito de bloque
var musica = "Rock";
console.log("variable musica antes del Bloque", musica);

/*Este es un comentario
      de varias 
      lineas */

// Esto es un bloque
var musica = "Rock";
console.log("variable musica antes del Bloque", musica);
{
  var musica = "Pop";
  console.log("variable musica dentro del Bloque", musica);
}

console.log("variable musica despues del Bloque", musica);

("***********let**************");

let musica2 = "Rock";
console.log("variable musica2 antes del Bloque", musica2);
{
  let musica2 = "Pop";
  console.log("variable musica2 dentro del Bloque", musica2);
}

console.log("variable musica2 despues del Bloque", musica2);
