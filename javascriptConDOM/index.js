let contenedor = document.getElementById("contenedor");
let ListaProductos = [
    {producto: "babyshowers" , precioUnit:50, cantDesc:20, descuento:12,img: `http://creacionesajonjoli.000webhostapp.com/imagenes/tarjeta-baby-shower.webp`},
    {producto: "cumpleaños" , precioUnit:4500, cantDesc:2, descuento:13,img: `http://creacionesajonjoli.000webhostapp.com/imagenes/felizcumple.jpeg`},
    {producto: "comuniones" , precioUnit:200, cantDesc:10, descuento:10,img:`http://creacionesajonjoli.000webhostapp.com/imagenes/comunion.jpeg`},
    {producto: "props" , precioUnit:80 ,cantDesc:20, descuento:10,img:`http://creacionesajonjoli.000webhostapp.com/imagenes/props.jpeg`},
    {producto: "bautismos" , precioUnit:5500, cantDesc:2, descuento:13,img:`http://creacionesajonjoli.000webhostapp.com/imagenes/bautismo.jpeg`},
    {producto: "books" , precioUnit:3200, cantDesc:2 ,descuento:10,img: `http://creacionesajonjoli.000webhostapp.com/imagenes/brisa.jpg`},
    {producto: "gigantografias" , precioUnit:7000, cantDesc:2, descuento:18, img:`http://creacionesajonjoli.000webhostapp.com/imagenes/gigantografias.jpeg`},
    {producto: "invitacionesDigitales" , precioUnit:1300, cantDesc:5, descuento:15,img:`http://creacionesajonjoli.000webhostapp.com/imagenes/invitacion-digital.jpg`},
];
    
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
}