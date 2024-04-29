const z = [];
const x = [1, true, "hola", ["A", "B", "C"]];

console.log(z);
console.log(x);
console.log(x.length);
console.log(x[2]);
console.log(x[3][1]);

const xx = Array.of("5", "7", "10", 13);
console.log(xx);

const color = ["Rojo", "Celeste", "Blanco"];
console.log(color);

color.push("Negro");
console.log(color);

color.pop();
console.log(color);

color.forEach(function (el, index) {
  console.log(`<li id= "${index}"> ${el}>/li>`);
});
