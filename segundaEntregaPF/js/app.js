let total = 0;
let entrada = "";
let productos = [];

function cargarItem() {

    const nuevoItem = new Item();
    nuevoItem.nombre = prompt("Ingrese el nombre del articulo");
    nuevoItem.tipo = prompt("Ingrese el tipo de producto");
    nuevoItem.stock = Number(prompt("Ingrese el stock del articulo"));
    nuevoItem.precio = parseFloat(prompt("Ingrese su precio unitario"));

    productos.push(nuevoItem);
}

function bienvenido() {
    alert("Bienvenido a la segunda Entrega del Proyecto Final en JS");
}

const cargaDatos = () => {
    let seguir;
    do {
        cargarItem();
        seguir = prompt("Desea ingresar mas articulos? \n s/n");
    }while (seguir == 's');
}

function mostrarCarrito() {
    let salida = '';
    productos.forEach((item) => {
        salida = salida + `Nombre : ${item.nombre} \n Tipo : ${item.tipo} \n Stock : ${item.stock} \n Precio: ${item.precio}\n\n`;
    });
    alert(salida);
}

function buscarProducto () {
    let busqueda;
    busqueda = prompt('Ingrese un articulo a buscar en el carrito');
    const encontrado = productos.find((encontrado) => {
        if (productos.nombre === 'busqueda')
        {
            return true;
            alert("El producto esta en la lista");
        }else {
            return false;
            alert("El producto no se cargo");
        }
});
}

bienvenido();
cargaDatos();
buscarProducto();
mostrarCarrito();
productos.forEach((item)=> {
    console.log(item);
});
