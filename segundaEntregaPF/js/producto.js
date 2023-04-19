class Item {
    nombre;
    tipo;
    stock;
    precio;
constructor(nombre, tipo, stock, precio)
{
    this.nombre = nombre;
    this.tipo = tipo;
    this.stock = stock;
    this.precio = precio;
} 
subTotal = () => {
    return this.precio * this.cantidad;
}

}