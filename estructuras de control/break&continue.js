const listaDenumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < listaDenumeros.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(listaDenumeros[i]);
}

for (let i = 0; i < listaDenumeros.length; i++) {
  if (i === 5) {
    continue;
  }
  console.log(listaDenumeros[i]);
}
