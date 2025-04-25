/**1. Define una interfaz llamada IPersona con propiedades nombre, edad y un
método presentarse().
2. Crea una clase llamada Persona que implemente esta interfaz y
proporciona la implementación del método presentarse().
*/

interface IPersona {
    name: string
    age: number

    presentarse(): void
}

class Persona implements IPersona{
    name: string
    age:number

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }

    presentarse() {
        console.log(`Hola! Mi nombre es ${this.name} y tengo ${this.age} años, vos como te llamas?`)
    }
}

let persona1 = new Persona("Victoria",25)
persona1.presentarse()