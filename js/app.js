// DOM 
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');
const boton4 = document.getElementById('boton4');
const boton5 = document.getElementById('boton5');
const boton6 = document.getElementById('boton6');
const input = document.getElementById('input');
const btnVaciar = document.getElementById('btnvaciar');
const btnFinalizar = document.getElementById('btnfinalizar')
const tabla = document.getElementById('viajes');

//Definicion de Array

let viajes = JSON.parse(localStorage.getItem('viajes'));
// if (!viajes) {
//         viajes = [new Viaje(id = 1, destino = 'Chile', precio = 2000, cantidad = 0), new Viaje(id = 2, destino = 'Ecuador', precio = 4000, cantidad = 0), new Viaje(id = 3, destino = 'Misiones', precio = 600, cantidad = 0), new Viaje(id = 4, destino = 'Mexico', precio = 3000, cantidad = 0), new Viaje(id = 5, destino = 'Perito Moreno', precio = 1500, cantidad = 0), new Viaje(id = 6, destino = 'Peru', precio = 2000, cantidad = 0)]};
let viajesJSON = JSON.stringify(viajes);

//Funciones
let subtotal = function(precio, cantidad) {
    return precio*cantidad;
} 
traerViajes()
async function traerViajes() {
    viajes = await fetch('../model/data.json').then((response) => {
        if (response.ok) {
            return response.json();
        }else {
            throw new Error('Error codigo ' + response.statusText);
        }
    }).catch((error) => {
        Swal.fire({
        title: '',
        text: 'Estamos trabajando en esto',
        imageUrl: '../images/finalizar.jpg',
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: 'btn--finalizar--img',
    })})
}
function agregarViaje() {
    boton1.addEventListener('click', () => {
        viajes.forEach((viaje) => {
            if (viaje.id === 1) {
                viaje.cantidad > 0 ? viaje.cantidad++ : viaje.cantidad = 1 
            }
        })
    mostrarViajes() 
    })
    boton2.addEventListener('click', () => {
        viajes.forEach((viaje) => {
            if (viaje.id === 2) {
                viaje.cantidad > 0 ? viaje.cantidad++ : viaje.cantidad = 1
            }
        })
    mostrarViajes()
    })
    boton3.addEventListener('click', () => {
        viajes.forEach((viaje) => {
            if (viaje.id === 3) {
                viaje.cantidad > 0 ? viaje.cantidad++ : viaje.cantidad = 1
            }
        })
    mostrarViajes()
    })
    boton4.addEventListener('click', () => {
        viajes.forEach((viaje) => {
            if (viaje.id ===4) {
                viaje.cantidad > 0 ? viaje.cantidad++ : viaje.cantidad = 1
            }
        })
    mostrarViajes()
    })
    boton5.addEventListener('click', () => {
        viajes.forEach((viaje) => {
            if (viaje.id === 5) {
                viaje.cantidad > 0 ? viaje.cantidad++ : viaje.cantidad = 1
            }
        })
    mostrarViajes()
    })
    boton6.addEventListener('click', () => {
        viajes.forEach((viaje) => {
            if (viaje.id ===6 ) {
                viaje.cantidad > 0 ? viaje.cantidad++ : viaje.cantidad = 1
            }
        })
    mostrarViajes()
    })
}

btnFinalizar.addEventListener('click', () => {
    Swal.fire({
        title: 'En desarrollo',
        text: 'Estamos trabajando en esto',
        imageUrl: '../images/finalizar.jpg',
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: 'btn--finalizar--img',
    })
})
function mostrarViajes() {
    tabla.innerHTML = "";
    let contador = 1;
    viajes.forEach((viaje) => {
        if (viaje.cantidad > 0) {
        tabla.innerHTML += `
        <tr>
            <td>${viaje.id}</td>
            <td>${viaje.destino}</td>
            <td>${viaje.precio}</td>
            <td>${viaje.cantidad}</td>
            <td>${subtotal(viaje.precio,viaje.cantidad)}</td>
        </tr>
        `;
        contador++;
    }
    });
    tr = document.createElement('tr');
    tr.innerHTML = `    <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>${viajes.reduce((total,viaje) => total + subtotal(viaje.precio,viaje.cantidad),0)}</td>
                    `;
    tabla.appendChild(tr);
    actualizarStorage();
}

function vaciarFunction() {
    btnVaciar.addEventListener('click', () => {
        Swal.fire({
            title: 'Estás segur@? ',
            text: "Esta acción no se podrá revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí'
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                'Borrado',
                'El listado se ha vaciado',
                'success'
                )
                tabla.innerHTML = ``;
                viajes.forEach((viaje) => {
                viaje.cantidad = 0;})
                actualizarStorage()
            }
        })
        })    
}
agregarViaje();
vaciarFunction();

function actualizarStorage() {
    localStorage.setItem('viajes', JSON.stringify(viajes))
    console.log(viajes)
    viajes = JSON.parse(localStorage.getItem('viajes'))
    Swal.fire({
        title: 'LocalStorage actualizado',
        text: 'El LS esta sincronizado',
        icon: 'success',
        confirmButtonText: 'Bien'
    })
    viajes.forEach((viaje)=> {
        if (viaje.cantidad > 0) {
    Toastify({
        duration: 10000,
        gravity: 'top',
        oldestFirst: false,
        close: true,
        text:` Destino:  ${viaje.destino} Precio: ${viaje.precio} Cantidad: ${viaje.cantidad} Total:  ${subtotal(viaje.precio,viaje.cantidad)})`,
        className: "info",
        style: {
            backgroundColor: "light-blue",
        }
        }).showToast();
    }})
    }


