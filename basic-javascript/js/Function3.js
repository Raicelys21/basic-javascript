function sumar(n1, n2) {
    return n1 + n2;
}

const resultado = sumar(2,3);

console.log(resultado);

let total = 0;

function agregarCarr(precio){
    return total += precio;
}

function calImpues(total){
    return 0.175 * total;    
}

total = agregarCarr(200);
total = agregarCarr(300);
total = agregarCarr(500);

console.log(total)

const totalPagar = calImpues(total);
console.log(`Total a pagar con impuestos es: $${totalPagar}`);
