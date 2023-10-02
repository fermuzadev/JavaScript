let precio;
let cantidad;
let descripcion;
let total = 0;
let entrada;

//Funcion Explicita de Bienvenida
function bienvenido() {
    alert("Bienvenido a la primer Pre-Entrega de JS");
    return;
}
//Funcion de Validación Implicita
const validarEntrada = function(valor) {
    if ((valor <= 0) || (valor == "")){
        alert("Ingrese datos válidos");
return valor;
}
}
bienvenido();

while (entrada != "N" ) {
    precio = parseFloat(prompt("Ingrese el precio del artículo"));
    validarEntrada(precio);
    // if (precio < 0 || precio == "") {
    //     alert("Ingrese un numero mayor a 0");
    //     precio = NaN;
    // } else {
    cantidad = parseInt(prompt("Ingrese la cantidad"));
    validarEntrada(cantidad);
    // Una arrow para total
    const funcionTotalArrow = (precio, cantidad) => {
    total = total + (precio * cantidad);};
    funcionTotalArrow(precio, cantidad);
    // if (cantidad < 0 || cantidad == "") {
    //     alert("Ingrese un numero mayor a 0");
    //     cantidad == NaN;
    // }
    
    descripcion = prompt("Ingrese la descripción del Producto");
    validarEntrada(descripcion);
    alert("El ingreso es  \n"  + 
    "Precio|Cantidad|Descripcion|Total \n" + 
    "$"  + precio + "   | " + cantidad + "u         " + "   |" +  descripcion + "    |" +"$" + total);
    entrada = prompt("Desea continuar? \n" + "INGRESE N PARA SALIR o cualquier entrada para Seguir").toUpperCase();
}