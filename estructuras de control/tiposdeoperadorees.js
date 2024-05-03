// Operadores aritmeticos

let a = 5 + 5 - 10 * 3;
let b = 10 / 2;
let modulo = 10 % 2;

console.log(a);
console.log(b);
console.log(modulo);

// Operadores relacionales

console.log(5 > 7);
console.log(5 < 7);
console.log(5 >= 7);
console.log(7 < 7);
console.log(7 <= 7);

/*
= 1 igual es asignacion de variables
== comparacion de valores
===
*/

console.log(7 == 7);
console.log("7" == 7);
console.log("7" === 7);

// Operadores de incremento o decremento

let i = 1;
//i = i + 2;
i += 2;

// Operador unario
i++;
i--;
++i;
--i;

console.log(i);

// Operadores logicos
/* ! Not: niega, lo que es verdadero lo vuelve falso.
|| Or: cuando tengo dos condiciones, con que una se cumpla el Or validara.
&& And: cunado tengo dos o mas condicones todas tienen que cumplirse para que valide.
 */
console.log(!true);
console.log(!false);
console.log(3 === 3) || "3" === 3;
