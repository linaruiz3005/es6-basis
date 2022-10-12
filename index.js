//importar module
//import {sumar , restar} from './sumar.js'

//const sumar = require("./sumar")
const colors = require('colors')
/*const estudiante = require('./estudiante')

//importar el componente sumar
//sumar
//tipos de variables
//Let: variables
let a = 10
//Const: constantes
const b = 20

//desestructurar un objeto
let {first_name , last_name} = estudiante

console.log(`La suma total es: ${sumar(a , b)}`.bgBlue)
console.log(`Nombre: ${estudiante.first_name}`.bgMagenta)
console.log(`Nombre: ${estudiante.last_name}`.bgCyan)
console.log(`Nombre: ${estudiante.height}`.bgWhite)

console.log(`Nombre: ${first_name}`.bgRed)*/

const materias = require('./materias')

//crear una nueva materia y ponerla en el arreglo de materia con el metoo push

/*materias.push({
    nombre: "Python",
    instructor: "Jorge Celedon",
    notas: [
        3.4,
        4.0
    ],
    tipo: "tecnica"
})

//recorrido del arreglo
materias.forEach((materia)=>{
    console.log(`nombre:${materia.nombre}`.magenta)
    console.log(`----------------`)
})



//map es un metodo de arreglos es6

/*const profesores = materias.map((materia)=>{
    return materia.instructor
})

console.log(profesores)

//find: este metodo sirve para localizar elementos de un arreglo que cumplan cierta condicion
//filter: las trae todas 
const PHP = materias.filter((materia)=>{
    return materia.instructor === "Cristian Buitrago"
})



console.log(PHP)*/

//eliminar materia con el metodo: splice

//actualizar una materia 
//encontrar el elemento que se quiere actualizar: findIndex
let indice = materias.findIndex((materia)=> materia.instructor === "Cristian Buitrago")
console.log(indice)

materias[indice].instructor = "Jennifer Fajardo";

console.log(materias)

let notas = materias.findIndex((materia)=> materia.notas === 4)
console.log(notas)

materias[indice].notas = 5.0, 3.0;

console.log(materias)



console.log(materias)

materias.splice(0,1)
console.log(materias)








/*let nota = materias.findIndex((materias)=> materias.notas === 5.0,6.0,3.4)
console.log(nota)*/
/*materias.push({
    nombre: "Python",
    instructor: "Jorge Celedon",
    notas: [
        3.4,
        4.0
    ],
    tipo: "tecnica"
})

console.log(materias)*/






