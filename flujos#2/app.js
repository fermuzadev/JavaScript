///Boolean

let valorVerdadero = true;
let valorFalso = false;

/**
 * Estructura IF
 * SI (CONDICION) ENTONCES {
 * BLOQUE DE CODIGO
 * }
 */

 if (valorVerdadero) {
     console.log('Hola!, entre aqui porque dio verdadero!');
 }

 if (valorFalso) {
     console.log('El mensaje nunca se imprimira!');
 }

console.log("resto del codigo....");


// let mail = true; //evaluamos el mail y el resultado fue true
let procesoValidacionMail = true; 
if (procesoValidacionMail) {
    console.log("El email ingresado es correcto");
    console.log("Hacemos cosas con el mail correcto....");
}else {
    console.log("El mail ingresado es invalido");
}
console.log("Aqui viene el resto del codigo");

/// Comparadores

let c;
let d;
let resultado;
c = "3";
d = 3;

//// IGUAL

resultado = (c==d);
console.log("resultado:" + resultado);

/// ==ESTRICTAMENTE IGUAL (La comparación estricta se usa para evitar posibles errores con los tipos de datos)
//valor y tipo identicos
resultado = (c===d);
console.log("resultado de ====: " +resultado);

/// > mayor <= mayor igual < menor <= menor igual

resultado = (a >= b);
console.log("resultado >= : " +resultado);

///DISTINTO > !=
resultado= 0;
resultado = (a != b);
console.log(" resultado != : " + resultado);

/// Estirctamente DISTINTO 
// MIRA VALOR Y TIPO

resultado = (a !== b);
console.log("resultado !==: " + resultado);


// EJERCICIO: El usuario ingresa un valor a través del prompt, evaluar si es mayor a 0 e informar con un mensaje en consola

let value;

value = prompt("Ingrese un valor numerico");

if (value > 0) {
    console.log("El numero es mayor a 0");
}else {
    console.log("El numero es menor a 0 o igual a 0")
}
// EJERCICIO: El usuario ingresa un valor a través del prompt, evaluar si es mayor a 0 o igual e informar con un mensaje en consola
let value2;

value2 = parseInt(prompt("Ingrese un valor numerico")); //se puede parsear para validaciones

if (value2 > 0) {
    console.log("El numero es mayor a 0");
} else {
     if ( value2 < 0)
      {
    console.log("El numero es menor a 0");
} else {
    console.log("El valor es igual a 0");
}
}

/// OPERADORES LOGICOS IMPORTANTE

let a;
let b;

a = 7;
b = 9;

if (a < b && a != 3) {
    console.log("a es menor a b y ademas es distinto de 3");
}

/// con el and, al ser necesario las dos condiciones verdaderas, si la primera es falsa ya no evalua la 2da.

/// OR || DOBLE PIPELINE

/// solo es falso cuando las 2 cond lo son

let pepe = "perro";
let pipo = "gato";

if ((pepe == "perro") || (pipo == "gato"))
{
    console.log("pepe es perro o pipo es gato");
}
else
{
    console.log(" Ni pepe es gato ni pipo es perro");
}

//Validacion de nombre

let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
}

//Validacion user y pwd:

let usuario   = prompt("Ingresar user");
let contrasena = prompt("Ingresar cntrasena");

if((usuario =='') || (contrasena =='')){
    alert("no ingreso datos en usuario o contraseña"); 
}else{
    alert("Datos correctos");
}

// Orden de precedencia de los operadores
// Mas fuerza tiene el && que el || se resuelve con parentesis

//  ! niega una condicion
let e = true;
let f = !e;

//f va a ser falso

//ver ejemplo de clase con login facebook (API(?))

if (!(usuario == '') || contrasena == '')
    {
        alert("Ingreso valido");
    }