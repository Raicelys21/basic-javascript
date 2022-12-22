//Funciones
//Declaracion
sumar(2,4);
function sumar(num1, num2){
    console.log(num1 + num2)
}

//Expresion
const sumar2 = function(){
    console.log(1 + 2)
}
sumar2();

//IIFE - proteger que no se mezclen
(function(){
    console.log('Esto es una funcion')
})();
