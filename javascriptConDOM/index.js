import {ListaProductos} from "./data.js";
let contenedor = document.getElementById("contenedor");
   


































/* 
let todoslosNombres = ListaProductos.map((item) => item.producto);
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
break;
} */