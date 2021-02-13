  // Cree la función que toma una matriz con objetos y devuelve la suma
  // de los presupuestos de las personas.

  const personas = [
    { id:1 , nombre: 'Jorge',presupuesto:1500},
    { id:2 , nombre: 'Fernando',presupuesto:2500},
    { id:3 , nombre: 'Alexander',presupuesto:2000},
    { id:4 , nombre: 'Eduardo',presupuesto:3800},
    

]

let sumaPresupuesto = personas.reduce((total,persona) => {
return total += persona.presupuesto;
},0 ) 
console.log(sumaPresupuesto);