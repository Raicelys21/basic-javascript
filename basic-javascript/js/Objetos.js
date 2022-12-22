//Objeto

const producto = {
    nombreProducto: 'Monitor',
    precio: 300,
    disponible: true
}

console.log(producto.precio)
console.log(producto["precio"])
producto.imagen = "imagen.jpg";

delete producto.disponible;
console.log(producto)



