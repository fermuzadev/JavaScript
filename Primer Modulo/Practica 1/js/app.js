let datoNumerico1;
let datoNumerico2;
let totalNumerico = 0;
let datoChar1;
let datoChar2;
let string = "";
let salida;

datoNumerico1 = parseInt(prompt("Hola, Bienvenid@ a la prueba JS " + " Ingrese un primer numero entero"));
datoNumerico2 = parseInt(prompt("Ingrese el segundo numero entero"));
totalNumerico = datoNumerico1 + datoNumerico2;
alert("El total sumado es " + totalNumerico);

datoChar1 = prompt("Ingrese una palabra ");
datoChar2 = prompt("Ahora ingrese otra ");
string = datoChar1 + datoChar2;
alert("La concatenacion ingresada es: " + string);

