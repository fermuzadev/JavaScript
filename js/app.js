//DOM HTML 
const listaViajes = document.querySelector('#listaViajes')
const input = document.getElementById('input');
const tabla = document.getElementById('viajes');
const btnVaciar = document.getElementById('btnvaciar');
const btnFinalizar = document.getElementById('btnfinalizar')

//Funciones
//Defino flujo de ejecución con asincronía para que tenga todo mapeado antes de modificar los elementos
async function flujo() {
    await traerViajes();
    cargarBotones();
    vaciarFunction();
    actualizarStorage();
}

document.addEventListener('DOMContentLoaded', flujo);

//Me traigo el JSON, y llamo a la función que me genera el html dinámico
async function traerViajes() {
    viajes = await fetch('https://raw.githubusercontent.com/fmuzaber/javascript/proyectoFinal2.5/model/data.json').then((response) => {
        if (response.ok) {
            return response.json();
        }else {
            throw new Error(response.statusText);
        }
        
    }).catch((error) => {
        Swal.fire({
        title: error,
        text: 'Estamos trabajando en esto',
        imageUrl: '../images/finalizar.jpg',
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: 'btn--finalizar--img',
        })
    })
    mapearViajes();
}

//Genero mi HTML dinámico
function mapearViajes() {
    let contador = 1;
    viajes.forEach((viaje)=> {
        if (contador < 11) {
            let card = document.createElement('div');
            card.classList.add('cards');
            card.innerHTML += `
            <div class="cards">
                <img src=${viaje.imagen} class="fluid imagen" alt="${viaje.destino}">
                <button class="btn-info btn" id="boton${viaje.id}" type="button">Agregar</button>
            </div>
            `;
            listaViajes.appendChild(card);
            contador++;
        } 
    });
    mostrarViajes();
}

// Crea la tabla generada por el usuario de acuerdo a los botones
function mostrarViajes() {
    tabla.innerHTML = "";
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
//Actualizo el localStorage con cada cambio implementado
function actualizarStorage() {
    localStorage.setItem('viajes', JSON.stringify(viajes))
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

function cargarBotones() {
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');
const boton4 = document.getElementById('boton4');
const boton5 = document.getElementById('boton5');
const boton6 = document.getElementById('boton6');
const boton7 = document.getElementById('boton7');
const boton8 = document.getElementById('boton8');
const boton9 = document.getElementById('boton9');
const boton10 = document.getElementById('boton10');
boton1.addEventListener('click', () => {
    viajes.forEach((viaje) => {
        if (viaje.id === 1) {
            viaje.cantidad > 0 ? viaje.cantidad++ : viaje.cantidad = 1 
        }
    })
    mostrarViajes();
})
boton2.addEventListener('click', () => {
    viajes.forEach((viaje) => {
        if (viaje.id === 2) {
            viaje.cantidad > 0 ? viaje.cantidad++ : viaje.cantidad = 1
        }
    })
    mostrarViajes();
})
boton3.addEventListener('click', () => {
    viajes.forEach((viaje) => {
        if (viaje.id === 3) {
            viaje.cantidad > 0 ? viaje.cantidad++ : viaje.cantidad = 1
        }
    })
    mostrarViajes();
})
boton4.addEventListener('click', () => {
    viajes.forEach((viaje) => {
        if (viaje.id ===4) {
            viaje.cantidad > 0 ? viaje.cantidad++ : viaje.cantidad = 1
        }
    })
    mostrarViajes();
})
boton5.addEventListener('click', () => {
    viajes.forEach((viaje) => {
        if (viaje.id === 5) {
            viaje.cantidad > 0 ? viaje.cantidad++ : viaje.cantidad = 1
        }
    })
    mostrarViajes();
})
boton6.addEventListener('click', () => {
    viajes.forEach((viaje) => {
        if (viaje.id ===6 ) {
            viaje.cantidad > 0 ? viaje.cantidad++ : viaje.cantidad = 1
        }
    })
    mostrarViajes();
})
boton7.addEventListener('click', () => {
    viajes.forEach((viaje) => {
        if (viaje.id ===7 ) {
            viaje.cantidad > 0 ? viaje.cantidad++ : viaje.cantidad = 1
        }
    })
    mostrarViajes();
})
boton8.addEventListener('click', () => {
    viajes.forEach((viaje) => {
        if (viaje.id ===8 ) {
            viaje.cantidad > 0 ? viaje.cantidad++ : viaje.cantidad = 1
        }
    })
    mostrarViajes();
})
boton9.addEventListener('click', () => {
    viajes.forEach((viaje) => {
        if (viaje.id ===9 ) {
            viaje.cantidad > 0 ? viaje.cantidad++ : viaje.cantidad = 1
        }
    })
    mostrarViajes(); 
})
boton10.addEventListener('click', () => {
    viajes.forEach((viaje) => {
        if (viaje.id ===10 ) {
            viaje.cantidad > 0 ? viaje.cantidad++ : viaje.cantidad = 1
        }
    })
    mostrarViajes();
})
}

//Calculo los totales
let subtotal = function(precio, cantidad) {
    return precio*cantidad;
} 

//Botón para modificar luego en el caso de ir a pagar
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

//Botón que vacía y actualiza el Storage con un swal 
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
