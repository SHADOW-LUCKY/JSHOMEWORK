// Destructuring de objetos(osea objetos por partes)
const aprendiendoJS = {
 version: {
  nueva: 'ES6',
  anterior: 'ES5',
 },
 frameworks: ['React', 'VueJS', 'AngularJS'],
}

// Destructuring es extraer valores de un objeto
console.log(aprendiendoJS)

//   Versión anterior
let version = aprendiendoJS.version.anterior
let version1 = aprendiendoJS.version.nueva
let framework = aprendiendoJS.frameworks[1]

// Destructuring forma nueva
let { anterior } = aprendiendoJS.version
console.log(anterior)
