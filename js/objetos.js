const ff = {
  nombre: "Kike",
  apellido: "Farias",
  edad: 35,
  contacto: {
    email: "estemail@gmail.com",
    celular: "3214569874",
  },

  saludar: function () {
    console.log(`Hola ;)`);
  },

  decirMiNOmbre: function () {
    console.log(`Hola mi nombre es ${this.nombre}`);
  },
};

// dentro de un objeto a las variables se les van a llamar atributos/propiedades y a las funciones se les llama metodos

console.log(ff);
console.log(ff.edad);
console.log(ff.decirMiNOmbre);

console.log(Object.keys(ff));
console.log(Object.values(ff));
console.log(ff.hasOwnProperty("nombre"));
