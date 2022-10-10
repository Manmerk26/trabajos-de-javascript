


class Producto {
    constructor(producto) {
        this.id = producto.id;
        this.nombre = producto.nombre;
        this.precio =producto.precio;
        this.foto = producto.foto;
    }
}

class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}


//Definiciones de constantes
const estandarPesosArg = Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' });


//Arrays donde guardaremos catálogo de productos y elementos en carrito
const productos = [];
const elementosCarrito = [];

const contenedorProductos = document.getElementById('contenedor-productos');

const contenedorCarritoCompras = document.querySelector("#items")

const contenedorFooterCarrito = document.querySelector("#footer");

document.addEventListener('DOMContentLoaded', () =>{
    traerData();
})
 


const traerData = async () =>{
try{
    const reponse = await fetch (`./data.json`);
    const data = await reponse.json();
    data.forEach(elemento => {
        productos.push(new Producto(elemento));
    });
    dibujarCatalogoProductos("");
}
catch(error){ 
    console.log(error);}
}



//Ejecucion de funciones


/* fetch(`./data.json`, {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
    })
.then(response => response.json())
.then(data =>{
    data.forEach(elemento => {
        productos.push(new Producto(elemento));
    });

dibujarCatalogoProductos("");
    })
.catch(error => console.log(error));
 */

    


cargarCarrito();
 carrito = JSON.parse(localStorage.getItem('carrito')) || [] ; 
  for (i=0;i<carrito.length;i++){
    elementosCarrito.push(new ElementoCarrito(carrito[i].producto,carrito[i].cantidad))} ;
 
/* if(localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'));
    for (i=0;i<carrito.length;i++){
        elementosCarrito.push(new ElementoCarrito(carrito[i].producto,carrito[i].cantidad))
    }
} */
dibujarCarrito();
dibujarCatalogoProductos();


//Definiciones de funciones


/* 
function cargarProductos() {
    productos.push(new Producto(1, 'Babyshowers' , 50 ,`http://creacionesajonjoli.000webhostapp.com/imagenes/tarjeta-baby-shower.webp` ));
    productos.push(new Producto(2, 'Cumpleaños' , 4500 , `http://creacionesajonjoli.000webhostapp.com/imagenes/felizcumple.jpeg`));
    productos.push(new Producto(3, 'Comuniones' , 200 , `http://creacionesajonjoli.000webhostapp.com/imagenes/comunion.jpeg`));
    productos.push(new Producto(4, 'Props' , 80 ,`http://creacionesajonjoli.000webhostapp.com/imagenes/props.jpeg`));
    productos.push(new Producto(5, 'Bautismos' , 5500 , `http://creacionesajonjoli.000webhostapp.com/imagenes/bautismo.jpeg`));
    productos.push(new Producto(6, 'Books' , 3200 ,`http://creacionesajonjoli.000webhostapp.com/imagenes/brisa.jpg`)),
    productos.push(new Producto(7, 'Gigantografias' , 7000 , `http://creacionesajonjoli.000webhostapp.com/imagenes/gigantografias.jpeg`));
    productos.push(new Producto(8, 'InvitacionesDigitales' , 1300 , `http://creacionesajonjoli.000webhostapp.com/imagenes/invitacion-digital.jpg`));
}
 */

function cargarCarrito(){}
function dibujarCarrito() {
    contenedorCarritoCompras.innerHTML = "";

    elementosCarrito.forEach(
        (elemento) => {
            let renglonesCarrito= document.createElement("tr");
            
            renglonesCarrito.innerHTML = `
                <td>${elemento.producto.id}</td>
                <td>${elemento.producto.nombre}</td>
                <td><input id="cantidad-producto-${elemento.producto.id}" type="number" value="${elemento.cantidad}" min="1" max="1000" step="1" style="width: 50px;"/></td>
                <td> ${estandarPesosArg.format(elemento.producto.precio)}</td>
                <td> ${estandarPesosArg.format(elemento.producto.precio*elemento.cantidad)}</td>
                <td><button id="eliminar-producto-${elemento.producto.id}" type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button></td>
                
            `;

            contenedorCarritoCompras.append(renglonesCarrito);
            

            //Agregar evento a input de renglón en carrito
            let inputCantidadProducto = document.getElementById(`cantidad-producto-${elemento.producto.id}`);
            inputCantidadProducto.addEventListener('change', (ev) => {
                let nuevaCantidad = ev.target.value;
                elemento.cantidad = nuevaCantidad;

                dibujarCarrito();
            });


            //Agregar evento a eliminar producto
            
            let botonEliminarProducto = document.getElementById(`eliminar-producto-${elemento.producto.id}`);
            
            botonEliminarProducto.addEventListener('click', () => {
                let indiceEliminar =  elementosCarrito.indexOf(elemento);
                elementosCarrito.splice(indiceEliminar,1);
                dibujarCarrito();
            
        });

          //Terminar compra
          let botonTerminarCompra = document.getElementsByClassName(`btn-primary-${contenedorCarritoCompras}`);

          botonTerminarCompra.addEventListener('onclick', (e) => {
             //Enviamos informacion en forma de parametros a traves de la url
        let params = {
            user_id: 'user_yVrRAHjsxIJshwpBg',
            service_id: 'default_service',
            template_id: 'template_lnzcymw',
            template_params: {
            nombre: elemento.producto.nombre,
            cantidad: elemento.cantidad,
            total: totalCompra, 
            }
        };
    
        let headers = {
            'Content-type': 'application/json'/*Tenemos la propiedad Content-type, con el valor que nos indica
            la documentacion de la API*/
        };
    
        //Definimos el segundo parametro opcional del fetch de tipo object en el cual transferimos datos en formato JSON
        let options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(params)
        };
    
        fetch('https://api.emailjs.com/api/v1.0/email/send', options)
        .then(async (httpResponse) => {//Con async-await esperamos a que se resuelva la promesa para continuar con la siguiente instruccion
            if (httpResponse.ok) {
                

                setTimeout(() => {
                    enviarSolicitud.value = 'Enviar';
                    Swal.fire({
                        imageUrl: '../img/logo.png',
                        imageHeight: 80,
                        imageWidth: 80,
                        background: '#be1e24',
                        width: 300,
                        title: '<h5 class="text-warning">Formulario enviado</h5>',
                        showConfirmButton: true,
                    }).then(function () {
                        window.location.href = "../index.html";
                    })

                }, 2000);


            } else {
                const text = await httpResponse.text();
                return await Promise.reject(text);
            }
        })
        .catch((error) => {
            enviarSolicitud.value = 'Enviar';
            console.log(error)
            Swal.fire({
                imageUrl: '../img/logo.png',
                imageHeight: 80,
                imageWidth: 80,
                background: '#be1e24',
                width: 300,
                title: `<h5 class="text-warning">No se pudo realizar el envio del formulario. Intente nuevamente.</h5>`,
                showConfirmButton: true,
              })
        });
        
        

          } )

        
    });

    const valorInicial = 0;
    const totalCompra = elementosCarrito.reduce(
        (previousValue, currentValue) => previousValue + currentValue.producto.precio*currentValue.cantidad,
        valorInicial
        
    );
    
    elementosCarrito.length == 0 ? contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="6">Carrito vacío - comience a comprar!</th>` : contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="6">Total de la compra: ${estandarPesosArg.format(totalCompra)}</th>` ;
    
    /* if(elementosCarrito.length == 0) {
        contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="6">Carrito vacío - comience a comprar!</th>`;
    } else {
        contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="6">Total de la compra: ${estandarPesosArg.format(totalCompra)}</th>`;
    } */



     localStorage.setItem('carrito', JSON.stringify(elementosCarrito));//Guardar producto en el local storage  
}


function removerProductoCarrito(elementoAEliminar) {
    const elementosAMantener = elementosCarrito.filter((elemento) => elementoAEliminar.producto.id != elemento.producto.id);
    elementosCarrito.length = 0;
    elementosAMantener.forEach((elemento) => elementosCarrito.push(elemento));
    
}


function crearCard(producto) {
    //Botón
    let botonAgregar = document.createElement("button");
    botonAgregar.className = "btn btn-success";
    botonAgregar.innerText = "Agregar";

    //Card body
    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body";
    cuerpoCarta.innerHTML = `
        <h5>${producto.nombre}</h5>
        <p>${estandarPesosArg.format(producto.precio)} </p>
    `;
    cuerpoCarta.append(botonAgregar);

    //Imagen
    let imagen = document.createElement("img");
    imagen.src = producto.foto;
    imagen.className = "card-img-top";
    imagen.alt = producto.nombre;

    //Card
    let carta = document.createElement("div");
    carta.className = "card m-2 p-2";
    carta.style = "width: 18rem";
    carta.append(imagen);
    carta.append(cuerpoCarta);
    
    
    //Agregar algunos eventos
    botonAgregar.onclick = () => {

        let elementoExistente = 
            elementosCarrito.find((elem) => elem.producto.id == producto.id);
        
            elementoExistente ? elementoExistente.cantidad+=1 : elementoCarrito = new ElementoCarrito(producto, 1);
            elementosCarrito.push(elementoCarrito);




        /* if(elementoExistente) {
            elementoExistente.cantidad+=1;
        } else {
            let elementoCarrito = new ElementoCarrito(producto, 1);
            elementosCarrito.push(elementoCarrito);
        } */

        dibujarCarrito();



    
    swal({
        title: '¡Producto agregado!',
        text: `${producto.nombre} agregado al carrito`,
        icon: 'success',
        buttons: {
            cerrar: {
                text: "cerrar",
                value: false
            },
            carrito: {
                text: "ir a carrito",
                value: true
            }
        }
    }).then((decision) => {
        if(decision) {
            const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {keyboard: true});
            const modalToggle = document.getElementById('toggleMyModal'); 
            myModal.show(modalToggle);
        }
    });


}

    return carta;

}

function dibujarCatalogoProductos() {
        contenedorProductos.innerHTML ="";
    productos.forEach(
        (producto) => {
            let contenedorCarta = crearCard(producto);
            contenedorProductos.append(contenedorCarta);
        }
    );
   

}


