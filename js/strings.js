// cadenas de texto

let nombre = "kike";
let apellido = "crack";
let saludo = new String("Hola mundo");
let lorem =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias cupiditate hic libero, vitae, dolore distinctio explicabo dolorem magnam consequuntur est at, provident aut reprehenderit? Quidem fuga id ex minus dicta!";

console.log(nombre, apellido, saludo);
console.log(
  nombre.length,
  apellido.length,
  saludo.length,
  nombre.toUpperCase(),
  apellido.toLocaleLowerCase(),
  saludo.includes("a"),
  lorem.trim(),
  lorem.split(",")
);
