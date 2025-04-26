/**
Ejercicio 4: Herencia de Métodos y Sobrescritura
Consigna: Define una clase base Flor con el método describir(), que imprime un
mensaje general sobre la flor. Luego, crea dos clases derivadas Rosa y Girasol,
cada una sobrescribiendo el método describir() con un mensaje específico.
 */

class Flor{
    nombre: string
    color: string

    constructor(nombre:string, color:string){
        this.nombre = nombre
        this.color = color
    }

    describir():void{
        console.log(`La flor se llama: ${this.nombre} y es de color ${this.color}`)
    }
}

class Rosa extends Flor{

    describir():void{
        super.describir()
        console.log(`La Rosa es una hermosa flor, puede significar muchas cosas según su color`)
    }

}

class Girasol extends Flor{

    describir():void{
        super.describir()
        console.log(`¿Sabías que los girasoles se llaman así porque se giran hacia el sol?`)
    }

}

let flor1 = new Flor("No me olvides","lila")
let rosa1 = new Rosa("Rosa","rojo")
let girasol1 = new Girasol("Girasol","amarillo")

console.log(`Aprendamos un poco de flores:`)
flor1.describir()
rosa1.describir()
girasol1.describir()