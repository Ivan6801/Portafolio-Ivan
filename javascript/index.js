var ivan = {
    nombre: 'Iván Alexander',
    apellidoPadre: 'González',
    apellidoMadre: 'González',
    edad: 20,
    altura: 1.65,
    fecha: '19 de Octubre de 1999',
    nacionalidad: 'México',
    ubicacion: 'Tijuana',
    correo: 'hal308366@gmail.com',
    telefono: 6643994860,
    carrera: 'Arquitectura Front End'
}

function imprimirDatos(persona) {
    document.getElementById('nombrecompleto').innerHTML = (`${persona.nombre}`) + (` ${persona.apellidoPadre} ${persona.apellidoMadre}`)
    document.getElementById('fechadenacimiento').innerHTML = (`${persona.fecha}`)
    document.getElementById('ubicacion').innerHTML = (persona.ubicacion)
    document.getElementById('edad').innerHTML = (persona.edad)
    document.getElementById('nombrecompleto2').innerHTML = (`${persona.nombre}`) + (` ${persona.apellidoPadre} ${persona.apellidoMadre}`)
    document.getElementById('correo').innerHTML = (`${persona.correo}`)
}


// const cumpleanos = persona => ({
//     ...persona,
//     edad: persona.edad + 1 
// })       
// cumpleanos(ivan)

imprimirDatos(ivan)


