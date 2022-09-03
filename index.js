/* function calcularPrecio(entrada,cantidad){
    var precio = 0
switch(entrada){
    case "babyshowers": 
    precio = 50 ;
    break;
    case "cumpleaños":
    precio = 4500 ; 
    break; 
    case "comuniones":
    precio = 200;
    break;
    case "props":
    precio = 750;
    break;  
    case "bautismos":
    precio = 5500 ; 
    break;   
    case "books":
    precio = 3200;
    break;
    case "gigantografias":
    precio = 7000;
    break;
    case "invitaciones digitales":
    precio = 1300;
    break;
    default:
        return Error
    break;
    
}
return precio * cantidad;
}
let entrada = prompt("Ingrese el producto");
let cantidad = prompt("ingrese la cantidad");
let precio = calcularPrecio(entrada,cantidad);
alert ("usted a comprado"+" "+entrada +" "+ "al precio de" + " " +precio);
contacto = prompt("Ingrese su contacto y nos comunicaremos a la brevedad");
alert ("Gracias por visitarnos");
 */

/* class Productos{
    constructor (producto,cantidad,precioConDesc,sinDesc){
        this.producto = producto;
        this.cantidad = cantidad;
        this.precioConDesc = precioConDesc;
        this.sinDesc = sinDesc;
    }*//* class Producto{
    constructor (producto,cantidad,precioConDesc){
        this.producto = producto;
        this.cantidad = cantidad;
        this.precioConDesc = precioConDesc;
    }
}

  const productos =[];

productos.push(new Producto("babyshowers" ,20 ,900));
productos.push(new Producto("cumpleaños" ,2 ,8000));
productos.push(new Producto("props" ,20 ,1300));
productos.push(new Producto("bautismos" ,1 ,5500));
productos.push(new Producto("books" , 1,3200));
productos.push(new Producto("gigantografias" , 1,7000));
productos.push (new Producto("invitacionesDigitales" ,1 ,1300)); */


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
if(contacto === " "){
    alert(contacto);
};
alert ("Gracias por visitarnos");





