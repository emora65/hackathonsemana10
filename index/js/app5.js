//Crear una función que reciba un array de valores y filtre los valores que no son string


var input = [1 ,'hola', 2,4,'persona'];

function soloNumeros(array){
  var numeros = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof(array[i])=="number") { 
       
       numeros.push(array[i]);
    }; 
  }
 return numeros;
}  

console.log(soloNumeros(input));