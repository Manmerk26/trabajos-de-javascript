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

 class Productos{
    constructor (producto,cantidad,precioConDesc,sinDesc){
        this.producto = producto;
        this.cantidad = cantidad;
        this.precioConDesc = precioConDesc;
        this.sinDesc = sinDesc;
    }
}
const ListaProductos = [
    {producto: "babyshowers" , cantidad: 20, precioConDesc: 900, sinDesc:50},
    {producto: "cumpleaños" , cantidad: 2, precioConDesc: 8000, sinDesc:4500},
    {producto: "comuniones" , cantidad: 10, precioConDesc: 1900, sinDesc:200},
    {producto: "props" , cantidad: 20, precioConDesc: 1300, sinDesc:80},
    {producto: "bautismos" , cantidad: 1, sinDesc: 5500},
    {producto: "books" , cantidad: 1, sinDesc: 3200},
    {producto: "gigantografias" , cantidad: 1, sinDesc: 7000},
    {producto: "invitacionesDigitales" , cantidad: 1, sinDesc: 1300},
];

let producto = prompt("Ingrese el producto que desee");
let cantidad = parseInt(prompt("Ingrese la cantida que desee"));
if  (cantidad===1){

}

/* class Producto{
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

