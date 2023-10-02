let datoNumerico1;
let totalNumerico = 0;
let datoChar1;
let datoChar2;
let str;
let salida;

datoNumerico1 = parseInt(prompt("Hola, Bienvenid@ a la prueba JS " + " Ingrese un primer numero entero"));
if (!(datoNumerico1 >= 0) || (datoNumerico1 < 0)) {
    alert("El valor ingresado debe ser un numero");
}
else {alert("Prosiga");}
datoNumerico2 = parseInt(prompt("Ingrese el segundo numero entero"));
if (!(datoNumerico2 >= 0) || (datoNumerico2 < 0)) {
    alert("El valor ingresado debe ser un numero");
}
else {alert("Prosiga");}
totalNumerico = datoNumerico1 + datoNumerico2;
alert("El total sumado es " + totalNumerico);
alert (typeof("El tipo de dato es : " + totalNumerico));
datoChar1 = prompt("Ingrese una palabra ");
datoChar2 = prompt("Ahora ingrese otra ");
str = datoChar1 + datoChar2;
alert("La concatenacion ingresada es: " + str);
alert (typeof("El tipo de dato es : " + str));
console.log("la conca es : " + str);