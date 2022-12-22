//Metodo de propiedad

const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo cancion con el id: ${id}`)
    },
    pausar: function() {
        console.log('Pausando...')
    },
    crearPlaylist: function(nombre){
        console.log(`Creando playlist: ${nombre}`)
    },
    reprPlaylist: function(nombre){
        console.log(`Reproduciendo playlist: ${nombre}`)
    }

}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la cancion con el id: ${id}`)
}

reproductor.reproducir(1111);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Hola')
reproductor.reprPlaylist('Saturno')
