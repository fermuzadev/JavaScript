let carrito = [];

function cargarUnItem() {
  const nuevoItem = new Item();
  nuevoItem.nombre = prompt("Ingrese el nombre del producto");
  nuevoItem.precio = parseFloat(prompt("Ingrese un precio"));
  nuevoItem.cantidad = Number(prompt("Ingrese el stock"));
  nuevoItem.marca = prompt("Ingrese la marca");

  carrito.push(nuevoItem);
}

const cargarItems = () => {
  let seguir;
  do {
    cargarUnItem();
    seguir = prompt("Desea ingresar otro item si/no");
  } while (seguir == "si");
};

function mostrarCarrito() {
  let ticket = "";
  let totalTicket = 0;
  carrito.forEach((item) => {
    ticket =
      ticket +
      `Nombre : ${item.nombre} \n Precio: ${item.precio}  \n Cantidad: ${
        item.cantidad
      } \n Marca: ${item.marca} \n Sutbtotal : ${item.subTotal()} \n\n`;
  });

  totalTicket =
    totalTicket +
    carrito.reduce((total, item) => {
      return total + item.subTotal();
    }, 0);

  alert(ticket + `Total : ${totalTicket} `);
}

cargarItems();
mostrarCarrito();
