/**1. Crea un sistema para registrar Estudiantes con las siguientes clases:
o Estudiante: Clase que incluye propiedades como nombre, edad y
curso, además de un método que muestre la información del
estudiante.
o RegistroEstudiantes: Clase que maneje una lista de estudiantes, con
métodos para agregar un estudiante y mostrar todos los estudiantes
registrados.
*/

class Estudiante{
    nombre: string
    edad: number
    curso: string

    constructor(nombre:string, edad:number, curso:string){
        this.nombre = nombre
        this.edad = edad
        this.curso = curso
    }

    mostrarInfo(): void {
        console.log(`El estudiante ${this.nombre} tiene ${this.edad} años y cursa ${this.curso}`)
    }
}

class RegistroEstudiantes{
    private estudiantes: Estudiante[] = []

    agregarEstudiante(estudiante: Estudiante): void {
        this.estudiantes.push(estudiante)
        console.log(`Estudiante ${estudiante.nombre} agregado al registro.`)
    }

    mostrarEstudiantes(): void {
        console.log("Lista de estudiantes registrados:")
        this.estudiantes.forEach((estudiante) => estudiante.mostrarInfo())
    }
}

let registro = new RegistroEstudiantes()


registro.agregarEstudiante(new Estudiante("Viko",25,"Programación"))
registro.agregarEstudiante(new Estudiante("Fauno",32,"Bartender"))
registro.mostrarEstudiantes()

