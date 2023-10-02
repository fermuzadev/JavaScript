function correr(){
let apellido = prompt("Por favor ingrese su Apellido");
let nombre = prompt("Ahora ingrese su nombre");
let edad = prompt("Cual es tu edad?");
let año_actual = "2023";
let jubilacion = "65";

let calculo = + jubilacion - + edad;
let jubilo= +año_actual + calculo;

alert("Hola " + nombre + " " + apellido);
alert("Te vas a jubilar en el año " + jubilo); 
}

// function correr(){
//     let  apellido = prompt("Por favor ingrese su apellido");
//     let nombre = prompt("Ahora ingrese su nombre");
//     let edad = prompt("Cuál es su edad?");
//     let año_actual ="2023";
//     let jubilacion = "65";

//     let calculo = + jubilacion - + edad;
//     let jubilo = + año_actual + calculo;

//     alert("Hola " + nombre + " " + apellido);
//     alert("Te vas a jubilar en el año " + jubilo);
// }  VER DIFERENCIA SI LA HAY (?)