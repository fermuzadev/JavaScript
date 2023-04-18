//Entrada de Datos

let altura = parseFloat(prompt("Ingrese su altura"));
let peso = parseFloat(prompt("Ingrese su peso"));

//Proceso de Datos

let imc = peso / (altura * altura); 
let res;
//Validamos el IMC
if (imc < 18.5) {
   res = " Peso inferior al normal";
 } else if (imc >= 18.5 && imc <= 24.9) {
    res = 'Normal';
 } else if (imc >= 25 && imc <= 29.9) {
    res = "Peso superior al normal";
 } else {
   res = 'Obesidad'; 
 }
//Salida
alert("Tu IMC es : " + imc + "%");
alert("Tu condicion de salud es: " + res); 
console.log("Tu condicion de salud es: " + res);
