//Arreglos
const numeros = [10,20,30,40,50]

const meses = new Array('Enero', 'Febrero', 'Martes');

numeros[5] = 60;

// console.table(meses);

// Agrega
numeros.push(45, 70, 68); //final
console.table(numeros);
numeros.unshift(45, 70, 68); //inicio
console.table(numeros);

//Elimina
numeros.pop(); //final
numeros.shift(); // inicio
numeros.splice(2,1);

console.table(numeros);

//Rest operator o spred operator
const nuevoArreglo = [...numeros, 'Junio']; //equivalente a push - final 
const nuevoArre = ['Agosto',...numeros]; //equivalente a push - inicio

console.log(nuevoArreglo);
console.log(nuevoArre);





