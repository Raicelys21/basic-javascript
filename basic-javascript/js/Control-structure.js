//Control structure

const puntaje = 1001;

if (puntaje === 1000) {
    console.log('Puntaje es 1000');
} else{
    console.log('Puntaje NO ES 1000');
}

//!== no es igual
// === igual
// > menor que
// < mayor que

const efectivo = 1000,
      carrito = 1800;

if(efectivo > carrito){
 console.log('Puede comprar');
} else {
 console.log('NO puede comprar');
}

const rol = '';

if (rol === 'adm') {
    console.log('Acceso a todo el sistema');
} 
else if (rol === 'editor') {
    console.log('Acceso a un poco del sistema');
}
else{
    console.log('No tienes acesso');
}
