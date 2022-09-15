class Producto {
    constructor(id, nombre, precio, foto) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.foto = foto;
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

//Ejecucion de funciones



cargarProductos();
cargarCarrito();
dibujarCarrito();
dibujarCatalogoProductos();


//Definiciones de funciones
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


        }
    );

    const valorInicial = 0;
    const totalCompra = elementosCarrito.reduce(
        (previousValue, currentValue) => previousValue + currentValue.producto.precio*currentValue.cantidad,
        valorInicial
    );

    if(elementosCarrito.length == 0) {
        contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="6">Carrito vacío - comience a comprar!</th>`;
    } else {
        contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="6">Total de la compra: ${estandarPesosArg.format(totalCompra)}</th>`;
    }

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
        
        if(elementoExistente) {
            elementoExistente.cantidad+=1;
        } else {
            let elementoCarrito = new ElementoCarrito(producto, 1);
            elementosCarrito.push(elementoCarrito);
        }

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
        } else {
            swal("No quieres ir al carrito");
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





















































/* let contenedor = document.getElementById("contenedor");
const fragment = document.createDocumentFragment();
const template = document.querySelector("#template-li").content;


ListaProductos.forEach((item) => {
    let item = document.createElement("div");
    item.innerHTML = `<div class="card">
                      <img src=${productoComprado.img} class="imagen"></img>
                      <h2>${productoComprado.producto}</h2>
                      <p>PrecioUnit: $${productoComprado.precioUnit}</p>                      
                      <b>Comprando mas de ${productoComprado.cantDesc} productos tendra un descuento del ${productoComprado.descuento}%</b>
                      <p>Precio Total: $${aPagar}</p>
                      </div>`;
                      console.log(item);
    contenedor.append(item);
break;
}
 */


































 
/* let todoslosNombres = ListaProductos.map((item) => item.producto);
listaNombres=todoslosNombres.join( " - ");
let nombre="";
while (nombre === ""){
    nombre =prompt("Ingrese el producto que desee:\n"+ listaNombres ); 
   };
let productoComprado = ListaProductos.find(item => item.producto === nombre);
console.log(productoComprado);
let cantidad = parseInt(prompt("Ingrese la cantidad,adquiriendo mas de 20 tiene un mayor descuento"));
let precio = productoComprado.precioUnit;
if (cantidad > productoComprado.cantDesc) {
    precio = precio - (precio/100 * productoComprado.descuento);
};
let aPagar= cantidad * precio;
let arrProdComp = [];
arrProdComp.push(productoComprado);
for (let producto of arrProdComp) {
    let item = document.createElement("div");
    item.innerHTML = `<div class="card">
                      <img src=${productoComprado.img} class="imagen"></img>
                      <h2>${productoComprado.producto}</h2>
                      <p>PrecioUnit: $${productoComprado.precioUnit}</p>                      
                      <b>Comprando mas de ${productoComprado.cantDesc} productos tendra un descuento del ${productoComprado.descuento}%</b>
                      <p>Precio Total: $${aPagar}</p>
                      </div>`;
                      console.log(item);
    contenedor.append(item);
break;*/