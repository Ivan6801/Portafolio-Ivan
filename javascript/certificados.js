var ivan = {
    nombre: 'Iván Alexander',
    apellidoPadre: 'González',
    apellidoMadre: 'González',
    edad: 20,
    fecha: '19 de Octubre de 1999',
    nacionalidad: 'México',
    ubicacion: 'Tijuana',
    correo: 'ivanalexander39@hotmail.com',
    telefono: 6643994860,
    carrera: 'Arquitectura Front End'
}


function imprimirDatos(persona) {
    document.getElementById('correo').innerHTML = (`${persona.correo}`)
}


imprimirDatos(ivan)


