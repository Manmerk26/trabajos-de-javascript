let contenedor = document.getElementById("contenedor");
let ListaProductos = [
    {producto: "babyshowers" , precioUnit:50, cantDesc:20, descuento:12},
    {producto: "cumpleaños" , precioUnit:4500, cantDesc:2, descuento:13},
    {producto: "comuniones" , precioUnit:200, cantDesc:10, descuento:10},
    {producto: "props" , precioUnit:80 ,cantDesc:20, descuento:10},
    {producto: "bautismos" , precioUnit:5500, cantDesc:2, descuento:13},
    {producto: "books" , precioUnit:3200, cantDesc:2 ,descuento:10},
    {producto: "gigantografias" , precioUnit:7000, cantDesc:2, descuento:18},
    {producto: "invitacionesDigitales" , precioUnit:1300, cantDesc:5, descuento:15},
];
    
let todoslosNombres = ListaProductos.map((item) => item.producto);
listaNombres=todoslosNombres.join( " - ");

let nombre="";
while (nombre === ""){
    nombre =prompt("Ingrese el producto que desee:\n"+ listaNombres ); 
   };
let productoComprado = ListaProductos.find(item => item.producto === nombre);
console.log(productoComprado);
for (let producto of productoComprado.producto) {
    let item = document.createElement("div");
    item.innerHTML = `<h2>${productoComprado.producto}</h2>
                      <p>PrecioUnit: $${productoComprado.precioUnit}</p>
                      <b>Comprando mas de ${productoComprado.cantDesc} tendra un descuento del ${productoComprado.descuento}%</b>`;
                      console.log(item);
    contenedor.append(item);
break;
}