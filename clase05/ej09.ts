/**Ejercicio 9: Sistema de Gestión de Vehículos
1. Crea un sistema de gestión de Vehículos que incluya las siguientes clases:
o Vehiculo: Clase base con propiedades como marca, modelo y un
método para mostrar información del vehículo.
o Coche: Clase que extiende Vehiculo e incluye una propiedad para
tipoCombustible y un método para mostrar la información completa
del coche.
o Motocicleta: Clase que extiende Vehiculo e incluye una propiedad
para cilindrada y un método para mostrar la información completa
de la motocicleta.
*/

class Vehículo{
    marca: string
    modelo: string

    constructor(marca:string , modelo: string){
        this.marca = marca
        this.modelo = modelo
    }

    mostrarInformacion(): void{
        console.log(`El vehículo de modelo ${this.modelo} es de la marca ${this.marca}`)
    }
}

class Coche extends Vehículo{
    tipoCombustible: string

    constructor(marca:string , modelo: string , tipoCombustible: string){
        super(marca, modelo)
        this.tipoCombustible = tipoCombustible
    }

    mostrarInformacion(): void {
        console.log(`El coche modelo ${this.modelo} de la marca ${this.marca} utiliza ${this.tipoCombustible} de combustible`)
    }

}

class Motocicleta extends Vehículo{
    cilindrada: number

    constructor(marca:string , modelo: string , cilindrada: number){
        super(marca, modelo)
        this.cilindrada = cilindrada
    }

    mostrarInformacion(): void {
        console.log(`La moto de modelo: ${this.modelo} de la marca ${this.marca} es de cilindrada: ${this.cilindrada}`)
    }

}

console.log(`----- Vehículo -----`)
let vehiculo1 = new Vehículo("Honda","Civic")
vehiculo1.mostrarInformacion()
console.log(`----- Coche -----`)
let coche1 = new Coche("Ford","Falcon","Nafta")
coche1.mostrarInformacion()
console.log(`----- Motocicleta -----`)
let moto1 = new Motocicleta("BMW ","S1000RR",999)
moto1.mostrarInformacion()
