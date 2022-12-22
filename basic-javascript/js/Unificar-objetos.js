const producto = {
    nombreProducto: 'Monitor',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

const nuevoPro = { ...producto, ...medidas};

console.log(nuevoPro)
