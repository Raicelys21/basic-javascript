const carrito = [
    {nombre: 'hola1', precio: 300},
    {nombre: 'hola2', precio: 100},
    {nombre: 'hola3', precio: 200},
    {nombre: 'hola4', precio: 300},
    {nombre: 'hola5', precio: 400},
    {nombre: 'hola6', precio: 500},
    {nombre: 'hola7', precio: 600},
    {nombre: 'hola8', precio: 700},
    {nombre: 'hola9', precio: 800}
]

//ForEach - iterar y mostrar en pantalla
carrito.forEach(function(prod){
    console.log(prod.nombre);
})

carrito.forEach(prod => console.log(prod.nombre));

//Map - crea un nuevo arreglo
carrito.map(function(prod){
    console.log(prod.nombre);
})
const arreglo = carrito.map(prod => prod.nombre);
console.log(arreglo);
