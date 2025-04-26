/**
 Consigna: Crea una clase base Maestro con propiedades protegidas nombre y
materia, y un método enseñar(). Luego, crea una clase derivada
MaestroMatematicas que extienda de Maestro y sobrescriba el método
enseñar() para imprimir un mensaje específico de matemáticas.
 */

class Maestro{
    protected nombre : string
    protected materia : string

    constructor(nombre:string, materia:string){
        this.nombre = nombre
        this.materia = materia
    }

    enseniar(){
        console.log(`El/La docente ${this.nombre} está enseñando ${this.materia}`)
    }
}

class MaestroMatematicas extends Maestro{
    enseniar(){
        super.enseniar()
        console.log(`¡Hora de matamáticas!`)
    }
}

let maestro1 = new Maestro("Marce","Proyecto Final")
let profeMate = new MaestroMatematicas("Paola","Matemática")

maestro1.enseniar()
profeMate.enseniar()
