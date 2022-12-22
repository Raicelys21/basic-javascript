//Arrow function

const sumar2 = (n1, n2) => console.log(n1 + n2)
sumar2(5, 10);

const apre = (name) => console.log(`Aprendiendo ${name}`)
apre('Javascript')


////////////////////////

const meses = new Array('Enero', 'Febrero', 'Martes');


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

//1
meses.forEach(mes => {
    if(mes == 'Enero'){
        console.log('Existe')
    }   
});

let resultado;

//2
resultado = carrito.some( prod => prod.nombre === 'hola1');

//3 - Reduce
total = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(total);

//4 - Filter
res = carrito.filter( car => car.precio > 400)
console.log(res);


