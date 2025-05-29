/**Crea una jerarquía de clases de Vehiculo con dos clases derivadas: Coche y
Moto. Cada clase debe sobrescribir el método arrancar de la clase base para
proporcionar una implementación específica de cómo arrancar. */

class Vehiculo{
    modelo: string
    marca: string

    constructor(modelo:string, marca: string){
        this.modelo = modelo
        this.marca = marca
    }

    arrancar():void{}
}

class Coche extends Vehiculo{

    arrancar(): void {
        console.log(`El coche ${this.marca} ${this.modelo} está arrancando.`)
    }

}

class Moto extends Vehiculo{

    arrancar(): void {
        console.log(`La moto ${this.marca} ${this.modelo} está arrancando.`)
    }

}

const auto = new Coche("Falcon","Ford")
auto.arrancar()

const moto = new Moto("Adventure 390","KTM")
moto.arrancar()