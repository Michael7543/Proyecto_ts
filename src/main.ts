import {IEstudiante} from "./entidades/estudiante";
import {IDocente} from "./entidades/docente";
import { IActividades } from "./entidades/actividades";
import { ILibroCalificaciones } from "./entidades/librocalificaciones";

let estudiantes:IEstudiante[]=[];
let docentes:IDocente[]=[];
let actividades:IActividades[]=[];
let libCalificaciones:ILibroCalificaciones[]=[];

enum Actividad{
    Programacion="diseño",
    Algebra="ejercicios de ecuaciones",
    Base="modelo normalizado"
}
enum Curso{
    Programacion="Programacion Visual",
    Algebra ="Algebra",
    Base="base de datos"
  }

//Agregar Estudiante

function agregarEstudiante():void{
    
   // console.log((<HTMLInputElement>document.getElementById("cedula"))!.value

    let estudianteActual :IEstudiante ={
        //id:Number(),

        cedula:parseInt(leerHtml("cedula_estudiante")),
        nombre:leerHtml("nombre_estudiante"),
        edad:parseInt(leerHtml("edad_estudiante")),
        codigoMatricula:leerHtml("codigoMatricula_estudiante"),
        nivel:leerHtml("nivel_estudiante"),
    }


    estudiantes.push(estudianteActual);
    console.log(estudiantes);
    console.table(estudiantes);

   
}

function leerHtml(id:string):string{
    return (<HTMLInputElement> document.getElementById(id)).value;
}
// Agregar docente

function agregarDocente():void{
    let docenteActual:IDocente={
        cedula:parseInt(leerHtml("cedula_docente")),
        nombre:leerHtml("nombre_docente"),
        edad:parseInt(leerHtml("edad_docente")),
       titulo:leerHtml("titulo_docente"),
       asignatura:leerHtml("asignatura_docente") as "Programacion " | "Metodologias" | "Analisis" ,
    }
    docentes.push(docenteActual);
    console.log(docentes);
    console.table(docentes);


}


//Agregar nombre

function agregarActividad(): void {
    let actividadActual: IActividades = {
      nombre: leerHtml("nombre_actividad"),
    };
    actividades.push(actividadActual);
    console.table(actividades);
    console.log(actividades);
  }

//Agreagar libro calificaciones

  function agregarCalificaciones(): void {
    let libroCalfActual: ILibroCalificaciones = {
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
  function seleccionaOpcion(): void{
    let cursoLibroCalf = document.getElementById("curso_libroCalf") as HTMLSelectElement;
    let cursos = Object.values(Curso);  
    cursos.forEach((val)=>{
      let opcion = document.createElement("option");
      opcion.value = val;
      opcion.text = val;
      cursoLibroCalf.add(opcion);
    })

}
// Agregar actividades

seleccionaropcionActividad();

function seleccionaropcionActividad(): void{
    let actividadLibroCalf = document.getElementById("actividad_libroCalf") as HTMLSelectElement;
    let actividad = Object.values(Actividad);  
    actividad.forEach((val)=>{
      let opcion = document.createElement("option");
      opcion.value = val;
      opcion.text = val;
      actividadLibroCalf.add(opcion);
    })
}
