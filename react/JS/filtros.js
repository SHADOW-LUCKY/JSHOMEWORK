// Métodos en arreglos

const personas = [
 { nombre: 'Frank', edad: 16, aprendiendo: 'c++' },
 { nombre: 'Pablo', edad: 18, aprendiendo: 'PHP' },
 { nombre: 'dom_say', edad: 21, aprendiendo: 'AdobePS' },
 { nombre: 'karen', edad: 30, aprendiendo: 'c#' },
 { nombre: 'skip', edad: 35, aprendiendo: 'ReactJS' },
]

console.log(personas)

// Mayores de 28 años
const mayores = personas.filter((persona) => {
 return persona.edad > 28
})
// console.log(mayores)

// Que aprende dom_say y su edad
const dom_say = personas.find((persona) => {
 return persona.nombre === 'dom_say'
})
// console.log('dom_say esta aprendiendo: ' + dom_say.aprendiendo)

let total = personas.reduce((edadTotal, persona) => {
 return edadTotal + persona.edad
}, 0)

console.log(total / personas.length)
