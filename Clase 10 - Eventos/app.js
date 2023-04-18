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

/* let elemento;

elemento = document;
console.log(document);

elemento = document.head;  //Accedo al head
console.log(elemento);

elemento = document.body;  //Me muestra los atributos
console.log(elemento);

elemento = document.URL; //URL
console.log(elemento);

elemento = document.contentType;  //Tipo de contenido
console.log(elemento);

elemento = document.scripts;  //Accedo a un ARRAY de scripts
console.log(elemento);

elemento = document.scripts[0].getAttribute('src');  //accedo al atributo src del primer script de mi array (el primero que tengo en el html s/ cascada)
console.log(elemento);

elemento = document.body.div;  //No se usa mucho de esta manera
console.log(elemento);

//Acceso al DOM
    //Por ID, devuelve el elemento
        const heading = document.getElementById('heading');
        console.log(heading.textContent);
        // heading.textContent = 'LE CAMBIO EL H1 POR JS DINAMICAMENTE';
        console.log(heading.textContent);
        //Puedo cambiar el css 
        // heading.style.color = 'red';  //No es recomendable modificar asi el css, se hace por estilos.css y clases generalmente
        console.log(heading);  //Muestra el HTML
    
        //Por clase, devuelve array
        const pepes = document.getElementsByClassName('pepe');
        console.log(pepes);
        console.log(pepes[0].textContent);
        console.log(pepes.length);  //Tiene las propiedades del array
        pepes[0].id = 'headong'; //Le cambio el atributo id si quiero
        //Para validaciones de pintar la ventana
        console.log(heading.classList);
        //Le agrego una clase a la lista(Cuando el usuario escriba mal le pinto de rojo:)
        heading.classList.add('bg-danger');
        //Si escribe bien, se lo quito:
        heading.classList.remove('bg-danger');
//Por tagName
const divs = document.getElementsByTagName('div');
console.log(divs);

console.log(divs[0].firstElementChild);  //traigo el primer hijo del primer div 
console.log(divs[0].lastElementChild);
console.log(divs[0].children);  //accedo a los hijos del div

//Acceder al html
//le modifico dinamicamente el html
console.log(divs[0].innerHTML);
// divs[0].innerHTML = ''; //se puede hacer con backtiks

//Creacion de elementos

console.log(heading.innerText);
console.log(heading.textContent);
 */

//Carrito de compras

/* let carrito = [];


function cargarUnItem() {
    const nuevoItem = new Item();
    nuevoItem.nombre = prompt("Ingrese un nombre");
    nuevoItem.precio = Number(prompt("Ingrese el precio")); //otra forma de hacer parseFloat
    nuevoItem.marca = prompt("Ingrese la marca");
    nuevoItem.tipo = prompt("Ingrese tipo de producto");
    nuevoItem.cantidad = +(prompt("Ingrese la cantidad"));  //otra forma de parse
    carrito.push(nuevoItem);
}

function cargarItems() 
{
    let seguir;
    do {
        cargarUnItem();
        seguir = prompt("Desea ingresar otro item si/no");
    }while (seguir =='si');
}
//una forma
function mostrarItemsCarrito() {
    const tabla = document.getElementById('items');
    tabla.innerHTML = "";
    let counter = 1 ;
    //Por cada elemento ITEM de mi carrito voy a generar el html
    carrito.forEach((item) => {
        tabla.innerHTML += `
        <tr>
            <th>${counter}</th>
            <td>${item.nombre}</td>
            <td>${item.tipo}</td>
            <td>${item.marca}</td>
            <td>${item.cantidad}</td>
            <td>${item.precio}</td>

        </tr>
        `;
        counter++;
        console.log(tabla.innerHTML);
    });
}
//otra forma
function mostrarItemsCarritoV2() {
    let tabla = document.getElementById('items');
    let counter = 1 ;
    tabla.innerHTML = "";
    carrito.forEach((item) => {
        let tr = document.createElement('tr');  //creo una fila
        let th = document.createElement('th');  //header de la fila
        th.textContent = counter;
        tr.appendChild(th);
        //empezamos con las celdas
        let td = document.createElement('td');
        td.textContent = item.nombre;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = item.tipo;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = item.marca;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = item.cantidad;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = item.precio;
        tr.appendChild(td);

        td = document.createElement('td');
        td.textContent = item.precio * item.cantidad;
        tr.appendChild(td);
    
        tabla.appendChild(tr);
        counter++;
    });

    tr = document.createElement('tr');
    tr.innerHTML = `<th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>${carrito.reduce((total, item) => total + item.precio*item.cantidad,0)}</td>
    `;
    tabla.appendChild(tr);
}
cargarItems();
// mostrarItemsCarrito();
mostrarItemsCarritoV2(); */

//EVENTOS

/* const boton1 = document.getElementById("cargaItem");
//Evento Clic
//Boton
boton1.addEventListener('click', () => {alert("Todavía no tiro nada de Magia");})
//se puede poner una variable para que se convierta en una funcion
boton1.addEventListener('mouseover', () => {alert("Estas encima mio");});
let evento1 = 'mouseover';  //Esto es lo que mas se usa
boton1.addEventListener(evento1, () => {alert('Estas arriba Rey / Reina');})
//Otra forma de hacerlo
//evento propio del boton, es mas dinamico
boton1.onclick = () => {console.log("Me hiciste clic loquit@");}

boton1.addEventListener('mousedown', () => {console.log("Oprimi el boton");})
boton1.addEventListener('mouseup', () => {console.log("Solte el boton");})

boton1.addEventListener('mouseover', () => {console.log("Estoy arriba");})  //como el :hover en CSS
boton1.addEventListener('mouseout', () => {console.log("Salgo de  arriba");})

boton1.addEventListener('mousemove', () => {console.log("Me muevo sobre el elemento");})

boton1.addEventListener('click', () => {console.log("Hago click");}) 
// Tambien se puede generar un escuchador sobre otros elementos del html, por ej un div */
//DOMcontentLoaded
//Evento de carga el html de arriba hacia abajo

document.addEventListener('DOMContentLoaded', () => {console.log("El documento ha sido cargado");});

//Eventos del teclado
//Para validaciones sobre input o form 
//Es buena practica poner los getelement arriba de todo
//Se agrega sobre los input, evento comun
input1 = document.getElementById("miInput");
input1.onkeydown = () => {
console.log("keyDown");
input1.style.border = '3px solid green';
input1.style.backgroundColor = 'lightblue'
} //Apreto una tecla
// input1.style.backgroundColor = 'red';
// input1.style.border = '10px solid black';
input1.onkeyup = () => {console.log("keyUp")}; //Suelto una tecla

//Change
//Se usa bastante, para validaciones de ingreso de datos se le puede poner borde rojo hasta que ingrese el dato correctamente por ejemplo
input1.addEventListener("change", () => {
    console.log("change");
    input1.style.border = '10px solid lightblue';
    input1.style.backgroundColor = 'black';
    input1.style.color = 'white';
    //Validaciones
    if (input1.value == 'Fer') 
    {
        input1.style.border = '5px solid green';
    } else {
        input1.style.border = '4px solid red';
    }
    });

//Evento INPUT
//Para validaciones tambien

//Es lo que se use generalmente
//Ocurre cada vez que presiono una tecla
input1.addEventListener('input' , () => {
    console.log(input1.value);
    if (input1.value.includes('@'))
    {
        input1.style.border = '5px solid green';
    } else {
        input1.style.border = '4px solid red';
    }
    })

//preventDefault en div

const miCheckbox = document.getElementById('id-checkbox');
/* miCheckbox.addEventListener('click' , () => {
     document.getElementById('output-box').innerHTML = 'preventDefault() no activo';
} ) */
//el parametro permite llevarse el evento
miCheckbox.addEventListener('click' , (e) => {
     document.getElementById('output-box').innerHTML = 'preventDefault()  activo';
     e.preventDefault();   //Hace que no me deje el check en el checkbox
     console.log(e);
     console.log(e.target); //a quien le hice click
     console.log(e.target.value); //accedo al valor del elemento
     console.log(e.timeStamp); //Devuelve el tiempo en el que hiciste click
} )
//En un checkbox el evento por default es que me pinte la casilla con un tilde
//En un formulario con boton enviar el evento x def es recargar la pagina, por ende con el prevent no se vva a recargar