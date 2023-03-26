let precio;
let cantidad;
let descripcion;
let total = 0;
let entrada;

alert("Bienvenido al Sistema de Ventas de la primera PreEntrega");
while (entrada != "N" ) {
        precio = parseFloat(prompt("Ingrese el precio del artículo"));
        if (precio < 0 || precio == "") {
            alert("Ingrese un numero mayor a 0");
            precio = NaN;
        } else {
            cantidad = parseInt(prompt("Ingrese la cantidad"));
            if (cantidad < 0 || cantidad == "") {
                alert("Ingrese un numero mayor a 0");
                cantidad == NaN;
            }
        }
        descripcion = prompt("Ingrese la descripción del Producto");
        total = total + (precio * cantidad);
        alert("El ingreso es  \n"  + 
        "Precio|Cantidad|Descripcion|Total \n" + 
        "$"  + precio + "   | " + cantidad + "u         " + "   |" +  descripcion + "    |" +"$" + total);
        entrada = prompt("Desea continuar? \n" + "INGRESE N PARA SALIR o cualquier entrada para Seguir");
}


