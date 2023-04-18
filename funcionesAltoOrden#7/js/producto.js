class Producto {
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

actualizarStockVenta = function(stock){
    console.log("Las unidades antes de la venta son " + this.stock);
    this.stock = this.stock -= stock ;
    console.log("El stock del producto :  " + this.nombre + " se redujo en  " + stock + " unidades");
    console.log("Las unidades despues de la venta son " + this.stock);
}

actualizarStockReposición = function(stock){
    console.log("Las unidades antes de la reposición son " + this.stock);
    this.stock = parseInt(stock) + parseInt(this.stock) ;
    console.log("El stock del producto : " + this.nombre + " se incrementó en  " + stock + " unidades");
    console.log("Las unidades despues de la reposición son " + this.stock)
}
}


