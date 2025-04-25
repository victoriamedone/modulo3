/**
Ejercicio 3: Herencia Múltiple Indirecta (vía Interfaces)
Consigna: Crea dos interfaces: Volador con el método volar() y Transportable
con el método transportar(). Luego crea una clase Avion que implemente ambas
interfaces y sobrescriba los métodos.
 */

interface Volador{

    volar(): void
    transportable(): void

}

class Avion{
    modelo: string

    constructor(modelo:string){
        this.modelo = modelo
    }

    volar(){
        console.log(`El avión ${this.modelo} está volando!`)
    }

    transportable(){
        console.log(`Ingrese la valija para transporte.`)
    }
}

let avion1 = new Avion("Boeing-676")
avion1.transportable()
console.log(`----- ABORDANDO -----`)
console.log(`----- DESPEGANDO -----`)
avion1.volar()