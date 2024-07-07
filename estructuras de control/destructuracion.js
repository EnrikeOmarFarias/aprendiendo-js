let numeross = [1, 2, 3];

// Sin destructuracion

let uno = numeross[0],
  dos = numeross[1],
  tres = numeross[2];

console.log(uno, dos, tres);

// Con destructuracion

const [one, two, three] = numeross;
console.log(one, two, three);

const persona = {
  nombre: "kik",
  apellido: "cra",
  edadd: 18,
};

let { nombre, apellido, edadd } = persona;
console.log(nombre, apellido, edad);
