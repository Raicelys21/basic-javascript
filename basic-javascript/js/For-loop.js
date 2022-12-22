//For loop

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

for (let i = 0; i < 10; i++) {
    if(i % 2 === 0){
        console.log(`${i} es par`);
    }
    else if(i % 2 === 1){
        console.log(`${i} es impar`);
    }
}

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

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i])
}

//While loop
let i = 0; //index

while(i <= 10){ //condi
    if(i % 2 === 0){
        console.log(`${i} es par`);
    }
    else if(i % 2 === 1){
        console.log(`${i} es impar`);
    }
    i++; //incre
}



//Do while loop

let a = 100;

do{
    console.log(a);

    a++;
} while( a < 10);
