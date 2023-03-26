//Entrada de Datos

let altura = parseFloat(prompt("Ingrese su altura"));
let peso = parseFloat(prompt("Ingrese su peso"));

//Proceso de Datos

let imc = peso / (altura * altura); 
let res = '';
//Validamos el IMC
if (imc < 18.5) {
    let res = " Peso inferior al normal";
 } else if (imc >= 18.5 && imc <= 24.9) {
    let res = 'Normal';
 } else if (imc >= 25 && imc <= 29.9) {
    let res = "Peso superior al normal";
 } else {
    let res = 'Obesidad'; 
 }
//Salida
alert("Tu IMC es : " + imc + "%");
alert("Tu condicion de salud es:" +res);  ///ver el codigo de los archivos que suba al drive 
