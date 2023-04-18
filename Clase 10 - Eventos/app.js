/* // let precio;
// let stock;
// let nombre;
// let total = 0;
// let entrada = "";

// //Funcion Explicita de Bienvenida
// function bienvenido() {
//     alert("Bienvenido a la primer Pre-Entrega de JS");
//     return;
// }
// //Funcion de Validación Implicita
// const validarEntrada = function(valor) {
//     if ((valor <= 0) || (valor == "")){
//         alert("Ingrese datos válidos");
// return valor;
// }
// }
// bienvenido();
// do  {
//     precio = parseFloat(prompt("Ingrese el precio del artículo"));
//     validarEntrada(precio);
//     // if (precio < 0 || precio == "") {
//     //     alert("Ingrese un numero mayor a 0");
//     //     precio = NaN;
//     // } else {
//     stock = parseInt(prompt("Ingrese la cantidad"));
//     validarEntrada(stock);
//     // Una arrow para total
//     const funcionTotalArrow = (precio, cantidad) => {
//     total = total + (precio * stock)};
//     funcionTotalArrow(precio, stock);
//     // if (cantidad < 0 || cantidad == "") {
//     //     alert("Ingrese un numero mayor a 0");
//     //     cantidad == NaN;
//     // }
    
//     nombre = prompt("Ingrese la descripción del Producto");
//     validarEntrada(nombre);
//     entrada = prompt("Desea continuar? \n" + "INGRESE N PARA SALIR o cualquier entrada para Seguir").toUpperCase();
// } while (entrada != "N" ) ;
// alert("El ingreso es  \n"  + 
// "Precio|Cantidad|Descripcion|Total \n" + 
// "$"  + precio + "   | " + stock + "u         " + "   |" +  nombre + "    |" +"$" + total);
// console.log(("El ingreso es  \n"  + 
// "Precio|Cantidad|Descripcion|Total \n" + 
// "$"  + precio + "   | " + stock + "u         " + "   |" +  nombre + "    |" +"$" + total));


// const producto1 = new Producto("Camiseta", "Camiseta", 10, 30000);
// const producto2 = new Producto("Short", "Short", 100, 10000);
// const producto3 = new Producto("Zapatilla", "Zapatillas", 10, 50000);
// const producto4 = new Producto("Pelota", "Pelotas", 10, 5000);


// console.log(producto1);
// console.log(producto2);
// console.log(producto3);
// console.log(producto4);

// producto1.actualizarStockReposición(prompt("ingrese un nro de reposición"));
// producto1.actualizarStockVenta(prompt("Ingrese un nro de venta"));


// const arrayProducto = [];
// arrayProducto.push(new Producto("Camiseta", "Camiseta", 10, 30000));
// arrayProducto.push(new Producto("Short", "Short", 100, 10000));
// arrayProducto.push(new Producto("Zapatilla", "Zapatillas", 10, 50000));
// arrayProducto.push(new Producto("Pelota", "Pelotas", 10, 5000));
// console.log(arrayProducto);

// function mostrarArrayProducto(arreglo)
// {
//     for (let i = 0; i < arreglo.length ; i++)
//     {
//         console.log(`arreglo[${i}]: ${arreglo[i].nombre}`);
//     }
// }

// function mostrarArrays(arreglos)
// {
//     for (const productos of arrayProducto) // recorro la lista de objetos
//     {
//         for (const atributo in productos)   //recorro la lista de atributos
//         {
//             console.log(atributo + ' : ' + productos[atributo]);
//         }
//     }
// }
// mostrarArrayProducto(arrayProducto);
// mostrarArrays(arrayProducto);


//Objeto Math
//Es un objeto propio del lenguaje JS 

console.log(Math.E);
//Metodos para calcular maximos y minimos
const valorMaximo = Math.max(3,2,5,7,1,9,8,16,22);
console.log(valorMaximo);
console.log(typeof Infinity); //Infinity es de tipo number

//Metodos para hacer redondeos
console.log(Math.round(21.5));   //entero mas cerca(22)  
console.log(Math.ceil(21.5));   //techo(22)
console.log(Math.floor(21.5));  //piso(21)

//Raiz cuadrada
console.log(Math.sqrt(9));   //3 
//Random
//limite inferior
console.log(Math.random() + 10);  //con el +10 le doy un limite inferior
//limite superior
//Un dado:
console.log("Tiro el dado y sale : "+ Math.round((((Math.random() * 100) % 6) + 1))); 
console.log ( new Date());  // fecha de hoy


const diaDeHoy = new Date();
//Para el almacenamiento de datos DB se usa:normas ISO
console.log(diaDeHoy.toISOString()); */

// Clase 9 JS - DOM


