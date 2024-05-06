/*if - else */

let edad = 15;

if (edad > 17) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

/* if  - else if - else */

/*
Dejame dormir  - 0hs - 6 hs
Buenos dias - 6 hs - 12 hs
Buenas tardes - 13hs - 18 hs 
Buenas noches 19hs - 23hs */

let hora = 19;
if (hora >= 23 && hora <= 6) {
  console.log("Dejame dormir");
} else if (hora >= 6 && hora <= 12) {
  console.log("Buenos dias");
} else if (hora >= 13 && hora <= 19) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}

/* Operador ternario (condicion)? verdadero: falsa */

console.log("Operador ternario");
let eresMayor = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(eresMayor);

/* Swich - case */
/*
domingo - 0
lunes - 1
martes -2
miercoles - 3
jueves - 4
viernes - 5
sabado - 6
*/

let dia = 25;

switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;

  default:
    console.log("El dia no existe");
    break;
}
