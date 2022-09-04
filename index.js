
const ListaProductos = [
    {producto: "babyshowers" , precioUnit:50, cantDesc:20, descuento:12},
    {producto: "cumpleaños" , precioUnit:4500, cantDesc:2, descuento:13},
    {producto: "comuniones" , precioUnit:200, cantDesc:10, descuento:10},
    {producto: "props" , precioUnit:80 ,cantDesc:20, descuento:10},
    {producto: "bautismos" , precioUnit:5500, cantDesc:2, descuento:13},
    {producto: "books" , precioUnit:3200, cantDesc:2 ,descuento:10},
    {producto: "gigantografias" , precioUnit:7000, cantDesc:2, descuento:18},
    {producto: "invitacionesDigitales" , precioUnit:1300, cantDesc:5, descuento:15},
];


let nombre = prompt("Ingrese el producto que desee");
let productoComprado = ListaProductos.find(item => item.producto === nombre);
let cantidad = parseInt(prompt("Ingrese la cantidad"));
let precio = productoComprado.precioUnit;
if (cantidad > productoComprado.cantDesc) {
    precio = precio - (precio/100 * productoComprado.descuento);
};
let aPagar= cantidad * precio;
alert ("usted ha comprado"+" "+ nombre +" "+ "al precio de" + " " + aPagar);
contacto = prompt("Ingrese su contacto y nos comunicaremos a la brevedad");
alert ("Gracias por visitarnos");





