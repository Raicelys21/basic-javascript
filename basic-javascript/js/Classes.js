//Classes

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProd() {
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
    }
    returnPre() {
        return `El precio es ${this.precio}`;
    }
    obtenerPrecio(){
        console.log(this.precio);
    }
}

const producto2 = new Producto('Monitor', 6000);
const producto3 = new Producto('TV', 800);

console.log(producto2);
console.log(producto3);

console.log(producto2.formatearProd());
console.log(producto3.returnPre());


//Herencia

class Libro extends Producto{
    constructor(nombre, precio, id){
        super(nombre, precio);
        this.id = id;
    }

    formatearProd() {
        return `${super.formatearProd()} y su id es ${this.id}`;
    }
    obtenerPrecio(){
        super.obtenerPrecio();
        console.log('Si hay en existencia');
    }

}

const libro = new Libro('Javascript II', 120, '43021');

console.log(libro);
console.log(libro.formatearProd());
console.log(producto3.obtenerPrecio());
console.log(libro.obtenerPrecio());


