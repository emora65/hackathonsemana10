// Escriba una función que convierta un objeto en una matriz,
//  donde cada elemento representa un par clave-valor.
 // toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]


 var object = {
    a: 15,
    b: 32,
    c: 67,
    d: 50
};
 
var array = [];
for(var people in object) {
  array.push([people, object[people]]);
}
console.log(array);
