//Modificar arreglo

const numeros = [10,20,30,40,50]

const meses = new Array('Enero', 'Febrero', 'Martes');

//Agregar y modificar

numeros[7] = 60;
numeros[6] = 60;

//Arreglos con objetos
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

//Comprobar si existe
meses.forEach(function(mes) {
    if(mes == 'Enero'){
        console.log('Existe')
    }   
})

//Includes
const hey = meses.includes('Enero');

//arreglos de objetos SOME
resultado = carrito.some(function(prod){
    return prod.nombre === 'hola1'
})
console.log(resultado);


//Reduce
total = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);
total2 = carrito.reduce((total, producto) =>  total + producto.precio, 0);

console.log(total);
console.log(total2);


//Filter
res = carrito.filter( function(car) {
    return car.precio > 400
})

res = carrito.filter( function(car) {
    return car.precio !== 300
})

console.log(res);
