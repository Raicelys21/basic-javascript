
const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log(`resultado es ${resultado}`))
})

if(Notification.permission == 'granted'){
    new Notification('Esta es una notificacion de', {
        icon: 'img/h.JPG',
        body: 'Raicelys codifica'
    })
    alert('SI');
}