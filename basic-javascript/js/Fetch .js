//Fetch api

async function obtenerE() {

    const archivo = 'empleados.json';

    fetch(archivo)
        .then( res =>  res.json())
        .then( datos => {
            //console.log(datos);
         
            const {empleados} = datos;
            console.log(empleados);

            empleados.forEach(empleado => {
                console.log(empleado);
                // console.log(empleado.id);
                // console.log(empleado.name);
                // console.log(empleado.puesto);

                //document.querySelector('.contenido').textContent = empleado.name;
                //document.querySelector('.contenido').textContent += empleado.name;

            });

     })

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);

}

obtenerE();
