"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let estudiantes = [];
let docentes = [];
let actividades = [];
let libCalificaciones = [];
var Actividad;
(function (Actividad) {
    Actividad["Programacion"] = "dise\u00F1o";
    Actividad["Algebra"] = "ejercicios de ecuaciones";
    Actividad["Base"] = "modelo normalizado";
})(Actividad || (Actividad = {}));
var Curso;
(function (Curso) {
    Curso["Programacion"] = "Programacion Visual";
    Curso["Algebra"] = "Algebra";
    Curso["Base"] = "base de datos";
})(Curso || (Curso = {}));
//Agregar Estudiante
function agregarEstudiante() {
    // console.log((<HTMLInputElement>document.getElementById("cedula"))!.value
    let estudianteActual = {
        //id:Number(),
        cedula: parseInt(leerHtml("cedula_estudiante")),
        nombre: leerHtml("nombre_estudiante"),
        edad: parseInt(leerHtml("edad_estudiante")),
        codigoMatricula: leerHtml("codigoMatricula_estudiante"),
        nivel: leerHtml("nivel_estudiante"),
    };
    estudiantes.push(estudianteActual);
    console.log(estudiantes);
    console.table(estudiantes);
}
function leerHtml(id) {
    return document.getElementById(id).value;
}
// Agregar docente
function agregarDocente() {
    let docenteActual = {
        cedula: parseInt(leerHtml("cedula_docente")),
        nombre: leerHtml("nombre_docente"),
        edad: parseInt(leerHtml("edad_docente")),
        titulo: leerHtml("titulo_docente"),
        asignatura: leerHtml("asignatura_docente"),
    };
    docentes.push(docenteActual);
    console.log(docentes);
    console.table(docentes);
}
//Agregar nombre
function agregarActividad() {
    let actividadActual = {
        nombre: leerHtml("nombre_actividad"),
    };
    actividades.push(actividadActual);
    console.table(actividades);
    console.log(actividades);
}
//Agreagar libro calificaciones
function agregarCalificaciones() {
    let libroCalfActual = {
        valor: parseInt(leerHtml("valor_libroCalf")),
        curso: leerHtml("curso_libroCalf"),
        actividad: leerHtml("actividad_libroCalf"),
        notaMaxima: parseInt(leerHtml("notaMaxima_libroCalf")),
    };
    libCalificaciones.push(libroCalfActual);
    console.table(libCalificaciones);
    console.log(libCalificaciones);
}
//Agregar curso
seleccionaOpcion();
function seleccionaOpcion() {
    let cursoLibroCalf = document.getElementById("curso_libroCalf");
    let cursos = Object.values(Curso);
    cursos.forEach((val) => {
        let opcion = document.createElement("option");
        opcion.value = val;
        opcion.text = val;
        cursoLibroCalf.add(opcion);
    });
}
// Agregar actividades
seleccionaropcionActividad();
function seleccionaropcionActividad() {
    let actividadLibroCalf = document.getElementById("actividad_libroCalf");
    let actividad = Object.values(Actividad);
    actividad.forEach((val) => {
        let opcion = document.createElement("option");
        opcion.value = val;
        opcion.text = val;
        actividadLibroCalf.add(opcion);
    });
}
