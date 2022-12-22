// "use strict"; //Correr en modo estricto 

const producto = {
    nombreProducto: 'Monitor',
    precio: 300,
    disponible: true
}

Object.seal(producto);

producto.imagen = "imagen.jpg";
producto.precio = 400;

console.log(producto)
