// va combinado con objectlit
//object constructor
function tarea(nombre, urgencia) {
 this.nombre = nombre
 this.urgencia = urgencia
}
//cree una nueva tarea
const tarea1 = new tarea('aprendiendo javascript y react', 'urgente')
const tarea2 = new tarea('hacer cafe', 'nada urgente')
const tarea3 = new tarea('hacer tareas ', 'urgente')
const tarea4 = new tarea('entregar almuerzos', 'medio urgente')
console.log(tarea1)
console.log(tarea2)
console.log(tarea3)
console.log(tarea4)
