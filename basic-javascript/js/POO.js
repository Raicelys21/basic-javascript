//Prog. orientada a objetos - POO

//Object literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//Object constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
const producto2 = new Producto('Monitor', 6000);
const producto3 = new Producto('TV', 800);

console.log(producto2);
console.log(producto3);

//Prototype
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
}
Cliente.prototype.formatearCliente = function() {
    return `El producto ${this.nombre} tiene un precio de ${this.apellido}`;
}

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
const cliente = new Cliente('Jose', 'Suero');
const cliente1 = new Cliente('Juan', 'Suero');

console.log(cliente);
console.log(cliente1);

//Prod
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
//Clien
console.log(cliente.formatearCliente());
console.log(cliente1.formatearCliente());







