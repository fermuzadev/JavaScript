// Variables
//var esta deprecada (no se usa mas)

//var miVariable;  //el punto y coma no es necesaria

let miVariable1;  //declaración de variable

//EN JAVASCRIPT CUANDO NO TIENE ALMACENADO NADA EL TIPO DE DATO ES UNDEFINED

miVariable =  5; //Asignacion

// El simbolo de igual es asignacion

//constante, la declaro y la debo INICIALIZAR

const PI = 3.14; 
//INICIALIZACION => CREAR Y ALMACENAR UN VALOR DE ENTRADA



//TIPOS DE DATOS
//Number > Numeros
//String > Cadena de caracteres

let miNumero = 5 ; //Number
let miNumeroFlotante = 2.7 // Number
let miTexto = 'hola'; //cadena de texto
let otroTexto = "hola"; 

/* HACER UN PROGRAMA QUE SUME, RESTE, DIVIDA Y CALCULE EL PRODUCTO DE 2 VALORES Y LOS ALMACENE EN OTRA VARIABLE*/

let x; //sentencia de codigo
let y; //sentencia de codigo (cumple una funcion, hace algo)
let resultado;

//Asignacion
x = 3;
y = 8;
//OPERACIONES ARITMETICAS
resultado = x + y ; //operacion SUMA
resultado = x - y;  //  RESTA
resultado = x / y ; // DIVISION
resultado = x * y ; //Producto
resultado = y % 2 // Resto de una división, si el resto es 0 es par, caso contrario impar

// Operaciones con STRINGS

let miTexto1 = "Hola "
let miTexto2 = "como estas";
let textoFinal;
// Concatenacion
textoFinal = miTexto1 + miTexto2; //Hola como estas

textoFinal = miTexto1 + 3; // Hola 3

console.log(textoFinal);//muestra de datos en consola 
console.log("El tipo de dato de textoFinal es: " + typeof textoFinal)
// como saber que tipo de dato estoy almacenando
// typeof textoFinal


//prompt y alert

//pedir informacion al usuario

//let valor = prompt('Hola ingrese un valor'); //funcion que muestra un mensaje en la ventana al usuario


//alert como modal, muestra un mensaje en una ventana en la pagina
//alert("El valor que almacenaste es: " + valor);

//hacer un programa que le pida al usuario dos valores, los sume y los muestre en un alert
let valor1;
let valor2;
let res ;
valor1 = prompt("Hola ingrese el primer valor")
valor2 = prompt ("Ingrese el 2")
valor1 = parseInt(valor1) //convierte a numero un string, PARSE
valor2 = parseInt(valor2) //convierte a numero un string, PARSE

//como el prompt devuelve strings, tengo que convertir esos valores a number
res = valor1 + valor2 ;
alert("El resultado es : " +res); //ver porque no me tira salida la web
