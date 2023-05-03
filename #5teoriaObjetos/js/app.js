//Defino el objeto

// const simpsons = {nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
// console.log(simpsons);

//Accedo al valor de las propiedades:

// console.log(simpsons.nombre); //Una forma de acceso
// console.log(simpsons["edad"]) // Otra forma de acceso


//Cambio valores, dos Formas

// simpsons["nombre"] = "Homero";
// simpsons.edad = 39;
// console.log(simpsons);

//Objetos constructores

function Simpsons(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

const simpsons1 = new Simpsons("Homero", 39, "Av. Siempreviva 742");
const simpsons2 = new Simpsons("Marge", 36, "Av. Siempreviva 742");

console.log(simpsons1);
console.log(simpsons2);

//Ejemplo clase:

// function Pokemon(nombre, tipo, nivel, poder, entrenador, tipoAtaque, puntosAtaque, evolucion, vida) {
// this.nombre = nombre;
// this.tipo = tipo;
// this.nivel = nivel;
// this.poder = poder;
// this.entrenador = entrenador;
// this.tipoAtaque = tipoAtaque;
// this.puntosAtaque = puntosAtaque;
// this.evolucion = evolucion;
// this.vida = vida;

// //acciones//metodos
// this.atacar = function() {
//     console.log(this.nombre + " genera un ataque de tipo " + this.tipo);
// }
// this.evolucionar = function(nombre, nuevosPuntosAtaque, nuevaVida) {
//     this.nombre = nombre;
//     this.nivel = this.nivel +1;
//     this.puntosAtaque = nuevosPuntosAtaque;
//     this.vida = nuevaVida;
//     console.log("Se ha evolucionado el pokemon a " + this.nombre);
// };

// this.volverPokeBola = function () {
//     console.log(this.nombre + " vuelve a la pokebola");
// }
// }

const unPokemon = new Pokemon("Pikachu", "electrico", 1, "Rayo", "Ash", "Electricidad", 3, 2, 5);
console.log(unPokemon);
unPokemon.atacar();
unPokemon.volverPokeBola();
unPokemon.evolucionar("Raichu", 5, 10);
