try {
  console.log("En el try se agrega el codigo a evaluar");
  noexist;
  console.log("Segundo mensaje de error");
} catch (error) {
  console.log("Catch, captura cualquier error surgido o lanzado en el try");
} finally {
  console.log(
    "El bloque finally se ejecutara siempre al final de unbloque try-catch"
  );
}

try {
  let numero = "j";
  if (isNaN(numero)) {
    throw new Error("El caracter introducido no es un numero");
  }
  console.log(numero * numero);
} catch (error) {
  console.log(`Se produce el sighiente error: ${error}`);
}
