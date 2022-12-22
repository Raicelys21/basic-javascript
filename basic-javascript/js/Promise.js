//Promise

const user = new Promise( (resolve, reject) => {
    const auth = false;
    if(auth){
        resolve('Autenticado'); //se cumple
    } else{
        reject('No autenticado'); //no se cumple
    }
});

user
    .then(function(resultado) {
        console.log(resultado)
    })
    .catch(function(error) {
        console.log(error)
    })

user
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

//Valores de promises
//Pending = en proceso
// Fullfilled = ya se cumplio
// Rejected = se ha rechazado
