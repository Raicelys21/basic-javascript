
function sumar(num1, num2){ //param
    console.log(num1 + num2)
}
sumar(2,4); //argumentos
sumar(3,4);
sumar(4,4); 

const sumar2 = function(){
    console.log(1 + 2)
}
sumar2();

function sumar(num1 = 0, num2 = 0){ //param
    console.log(num1 + num2)
}
sumar(2); //argumentos
sumar(3);
sumar(); 
