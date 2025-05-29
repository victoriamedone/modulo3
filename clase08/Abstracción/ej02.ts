/**Crea un sistema que gestione cursos, profesores y estudiantes. Usa una clase
abstracta Persona, clases concretas Estudiante y Profesor, y una clase Curso que
contenga los estudiantes y el profesor. */

export abstract class Persona{
    nombre: string
    edad: number
    id: number

    constructor(nombre: string, edad: number, id: number) {
        this.nombre = nombre 
        this.edad = edad 
        this.id = id
    }

    abstract describir(): string

}

class Estudiante extends Persona{
    constructor(nombre: string, edad: number, id: number){
        super(nombre, edad, id)
    }
    
    describir(){
        return `El estudiante ${this.nombre}, de ${this.edad} años, con ID ${this.id}`
        
    }
}

class Profesor extends Persona{
    constructor(nombre: string, edad: number, id: number,  public materia: string){
        super(nombre, edad, id)

    }

    describir() {
       return (`El Profesor: ${this.nombre}, de ${this.edad} años, es quien dicta la materia ${this.materia}`);
        
    }
}

class Curso{
    estudiantes: Estudiante[] = []
    
    constructor(public nombre: string, public profesor: Profesor){}
    
    agregarEstudiante(estudiante: Estudiante):void{
        this.estudiantes.push(estudiante) 
    }

    listarParticipantes(): void {
        console.log(`Curso: ${this.nombre}`)
        console.log(this.profesor.describir())
        console.log("Estudiantes inscriptos: ")
        this.estudiantes.forEach((est, idx)=>
            console.log(`${idx+1}.${est.describir()}`)
        )
      
    }
}

const profesor = new Profesor("Prof. Gallardo", 45, 1, "Matematicas")
const estudiante1 = new Estudiante("Enzo Perez", 36, 2)
const estudiante2 = new Estudiante("Franco Mastantuono", 18, 3)
const estudiante3 = new Estudiante("Sebastián Driussi", 29, 4)

const curso = new Curso("Matematicas", profesor)

curso.agregarEstudiante(estudiante1) 
curso.agregarEstudiante(estudiante2)
curso.agregarEstudiante(estudiante3) 


curso.listarParticipantes(); 