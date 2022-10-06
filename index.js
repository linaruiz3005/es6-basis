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
//recorrido del arreglo
materias.forEach((materia)=>{
    if(materia.instructor === 'Cristian Buitrago'){
        console.log(`nombre:${materia.instructor}`.bgMagenta)
        console.log(`nombre:${materia.notas}`.bgBlue)
    }
})
//map es un metodo de arreglos es6

const profesores = materias.map((materia)=>{
    return materia.instructor
})

console.log(profesores)

//find: este metodo sirve para localizar elementos de un arreglo que cumplan cierta condicion
//filter: las trae todas 
const PHP = materias.filter((materia)=>{
    return materia.instructor === "Cristian Buitrago"
})

console.log(PHP)
