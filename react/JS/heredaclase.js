//cree clases (relacionado con clases)
class tarea {
 constructor(nombre, prioridad) {
  this.nombre = nombre
  this.prioridad = prioridad
 }
 mostrar() {
  console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`)
 }

//cree objetos
let tarea1 = new tarea('aprenda java', 'alta')
let tarea2 = new tarea('juegue lol', 'baja')
let tarea3 = new tarea('bañese', 'urgente')
let tarea4 = new tarea('aprenda los principios de la quimica', 'media')
console.log(tarea1.mostrar())
console.log(tarea2.mostrar())
console.log(tarea3.mostrar())
console.log(tarea4.mostrar())
