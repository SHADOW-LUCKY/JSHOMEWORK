// console.log(persona)
// const mostrarCliente = mostrarInformacionTarea(
//  persona.nombre,
//  persona.profesion
// )
// console.log(mostrarCliente)
//  Object constructor
function Tarea(nombre, urgencia) {
 this.nombre = nombre
 this.urgencia = urgencia
}
// Agregar un prototype a tarea:
Tarea.prototype.mostrarInformacionTarea = function () {
 return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`
}

// Crear una nueva tarea:
const tarea1 = new Tarea('ponete a estudiar tu mama sufre XD', 'Urgente')
const tarea2 = new Tarea('jugar con el gato ', 'Media')
console.log(tarea1)
console.log(tarea1.mostrarInformacionTarea())
console.log(tarea2)
console.log(tarea2.mostrarInformacionTarea())
// const mostrarInfo = mostrarInformacionTarea(tarea1.nombre, tarea1.urgencia)
// console.log(mostrarInfo)
