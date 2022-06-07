// Object Literal enhancement(minecraft reference :V)

const banda = 'Metallica'
const genero = 'Heavy Metal'
const canciones = ['Master Of Puppets', 'Seek & Destroy', 'Enter Sandman']

//Forma anterior
const Metallica = {
 banda: banda,
 genero: genero,
 canciones: canciones,
}

// Forma nueva
const metallica = { banda, genero, canciones }
//ambas funcionan
console.log(metallica)
console.log(Metallica)
