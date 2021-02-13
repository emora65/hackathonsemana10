//Cree una función que tome una matriz de números y devuelva 
//los números mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

var input = [1 , 3, 5 ,8 , 10];
var mayor,menor;
mayor = input [0];
menor = input [0];
function extremos(array){
    var numeros = [];
     for (var i = 0; i < array.length; i++) {
    if(array [i]>mayor) {
        mayor = input[i];
        
    }
    
    if(array[i]<menor) {
        menor = input[i];
        
    }
       
      numeros.push(array[i]);
    }; 
  }
 //return numeros;

 console.log(extremos(input));