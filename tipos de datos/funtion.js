/* Una funcion es un bloque de codigo autocontenido que se puede definir una vez y ejecutar en cualquier momento. Opcionalmente una funcion puede aceptar parametros y devolver un valor */

/* Las funciones en JS son objetos, un tipo especial de objetos:
se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor , y pueden pasarse como argumentos y usarse como un valor de retorno. */

// Declaracion de funcion

function estoEsUnaFuncion() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
}

// Invocacion de funcion
estoEsUnaFuncion();

function unaFuncionQueDevuelveValor() {
  console.log("Uno");
  return 19;
  console.log("Dos");
  console.log("Tres");
  return "la funcion ha retornado una cadena de texto";
}

let valorDeFuncion = unaFuncionQueDevuelveValor();
console.log(valorDeFuncion);

function saludar(nombre, edad) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años `);
}

saludar("Kenai", 7);
saludar();

// Funciones declaradas vs Funciones expresadas
funcionDeclarada();

function funcionDeclarada() {
  console.log(
    "Esto es una funcion declara, pude invocarse en cualquier parte de nuestro codigo incluso antes de que la funcion sea declarada"
  );
}

funcionDeclarada();

// Funcion anonima
funcionExpresada();
const funcionExpresada = function () {
  console.log(
    "Esto es una funcion expresada, es decir una funcion que se le ha asigando como valor a una variable, si invocamos esta funcion antes de su definicion JS nos dira ..."
  );
};
