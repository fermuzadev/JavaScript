let productos = [];

function cargarUnProducto() {
  const nuevoProducto = new Producto();
  nuevoProducto.nombre = prompt("Ingrese el nombre del destino");
  nuevoProducto.precio = parseFloat(prompt("Ingrese un precio"));
  nuevoProducto.cantidad = Number(prompt("Ingrese la cantidad de personas"));

  productos.push(nuevoProducto);
}

const cargarProductos = () => {
  let seguir;
  do {
    cargarUnProducto();
    seguir = prompt("Desea ingresar otro destino si/no");
  } while (seguir == "si");
};

function mostrarArray() {
  let ticket = "";
  let totalTicket = 0;
  productos.forEach((producto) => {
    ticket =
      ticket +
      `Nombre : ${producto.nombre} \n Precio: ${producto.precio}  \n Cantidad: ${producto.cantidad} \n Sutbtotal : ${producto.subTotal()} \n\n`;
  });

  totalTicket =
    totalTicket +
    productos.reduce((total, producto) => {
      return total + producto.subTotal();
    }, 0);

  alert(ticket + `Total : ${totalTicket} `);
}

cargarProductos();
mostrarArray();
