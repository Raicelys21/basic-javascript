//Async / await 

function descargarNC() {
    return new Promise ( resolve =>{
        console.log('Descargando clientes... espere...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados...');
        }, 5000);
    });  
}

function descargarP() {
    return new Promise ( resolve =>{
        console.log('Descargando pedidos... espere...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados...');
        }, 3000);
    });  
}


async function app(){
    try {
        // const clientes = await descargarNC();
        // const pedidos = await descargarP();
        // console.log(clientes);
        // console.log(pedidos);

        const res = await Promise.all([descargarNC(), descargarP()]);
        console.log(res[0]);
        console.log(res[1]);

    } 
    catch (error) {
        console.log(error);
    }
}

app();

//console.log('Este codifo no se bloquea');

