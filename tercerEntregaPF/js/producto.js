class Producto {
  nombre;
  precio;
  cantidad;

  subTotal = () => {
    return this.precio * this.cantidad;
  };
}
