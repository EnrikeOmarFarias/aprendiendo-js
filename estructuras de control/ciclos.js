let contador = 8;

while (contador < 10) {
  console.log("While " + contador);
  contador++;
}

do {
  console.log("Do while " + contador);
  contador++;
} while (contador < 10);

/* for (inicializacion; condicion; decremento o incremento) {
  sentencia que ejecuta el for
    sentencia que ejecuta el for
} */

for (let i = 0; i < 10; i++) {
  console.log("for " + i);
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

const kike = {
  nombre: "kik",
  apellido: "crack",
  edad: 35,
};

//For in

for (const propiedad in kike) {
  console.log(`key: ${propiedad}, Value:${kike[propiedad]}`);
}

// For off

for (const elemento of numeros) {
  console.log(elemento);
}
