/**Diseña una clase Estudiante que contenga propiedades privadas para nombre,
edad, y calificaciones. Implementa métodos para agregar calificaciones y
calcular el promedio. Imprime un mensaje en caso de que se intente agregar
una calificación inválida (fuera del rango 0-100) o si no hay calificaciones para
calcular el promedio. */

class Estudiante {
    private nombre: string
    private edad: number
    private calificaciones: number[] = []

    constructor(nombre: string, edad: number) {
        this.nombre = nombre
        this.edad = edad
    }

    agregarCalificacion(calificacion: number): void {
        if (calificacion >= 0 && calificacion <= 10) {
            this.calificaciones.push(calificacion);
            console.log(`Calificación agregada: ${calificacion}`)
        } else {
            console.log(`Calificación inválida: ${calificacion}. Debe estar entre 0 y 10.`)
        }
    }

    calcularPromedio(): number | void {
        if (this.calificaciones.length === 0) {
            console.log(`No hay calificaciones para calcular el promedio.`)
            return
        }
        const suma = this.calificaciones.reduce((acc, nota) => acc + nota, 0)
        const promedio = suma / this.calificaciones.length
        console.log(`El promedio de las calificaciones es: ${promedio.toFixed(2)}`)
        return promedio
    }
}


const estudiante = new Estudiante("Juan", 20);

estudiante.agregarCalificacion(8)
estudiante.agregarCalificacion(9)
estudiante.agregarCalificacion(7)
estudiante.calcularPromedio()

console.log(estudiante)