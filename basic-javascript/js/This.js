//This

const reservacion = {
    nombre: 'Rai',
    apellido: 'Suero',
    total: 8888,
    pagado: false,
    information: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad de ${reservacion.total}`);
    }
}

const reservacion2 = {
    nombre: 'Jose',
    apellido: 'Suero',
    total: 9012,
    pagado: false,
    information: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad de ${this.total}`);
    }
}

reservacion.information();
reservacion2.information();
