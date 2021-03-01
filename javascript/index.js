const ivan = {
    nombre: 'Iván Alexander',
    apellidoPadre: 'González',
    apellidoMadre: 'González',
    edad: 20,
    altura: 1.68,
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
    document.getElementById('edad').innerHTML = (persona.edad + 1)
    document.getElementById('nombrecompleto2').innerHTML = (`${persona.nombre}`) + (` ${persona.apellidoPadre} ${persona.apellidoMadre}`)
    document.getElementById('correo').innerHTML = (`${persona.correo}`)
    document.getElementById('nacionalidad').innerHTML = (`${persona.nacionalidad}`)
}
imprimirDatos(ivan)

// var cumpleanos = persona => ({
//     ...persona,
//     edad: persona.edad + 1 
// })       


// cumpleanos(ivan)


let lista = document.getElementsByClassName('project');

function impirmirMostrar() {
    document.getElementById('article').innerHTML = (`${lista.length}`)
    console.log('Articles:',lista.length)
    // document.write(lista.length)
}

impirmirMostrar()



