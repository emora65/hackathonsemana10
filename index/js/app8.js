// Cree una función que tome una matriz de matrices con números. 
// Devuelve una nueva matriz (única) con el mayor número de cada uno.
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
var numeros = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];

function findLargestNums(numeros) {
  return numeros.map(x => Math.max(...x));
}

console.log(findLargestNums(numeros))  