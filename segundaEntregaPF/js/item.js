class Item {
  nombre;
  precio;
  cantidad;
  marca;

  subTotal = () => {
    return this.precio * this.cantidad;
  };
}
