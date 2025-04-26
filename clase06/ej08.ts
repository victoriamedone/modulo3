/**Ejercicio 2: Clases Abstractas - Sistema de Vehículos
Crea una clase abstracta Vehiculo con una propiedad velocidad y un método
abstracto mover(). Luego, implementa dos clases concretas: Auto y Bicicleta. Usa
los modificadores de acceso para controlar la visibilidad de las propiedades. */

abstract class Vehiculo{
    velocidad: number

    constructor(velocidad: number){
        this.velocidad = velocidad
    }

    mover(): void{}
}

class Auto extends Vehiculo{
    protected modelo : string
    protected marca : string

    constructor(modelo: string, marca: string, velocidad: number){
        super(velocidad);
        this.modelo = modelo;
        this.marca = marca;
    }

    mover(){
        super.mover()
        console.log(`El ${this.marca} ${this.modelo} se mueve a ${this.velocidad}km/h`)
    }

}

class Bicicleta extends Vehiculo{
    rodado: number

    constructor(rodado:number, velocidad: number){
        super(velocidad)
        this.rodado = rodado
    }

    mover(){
        super.mover()
        console.log(`La bicicleta de rodado ${this.rodado} se mueve a ${this.velocidad}km/h`)

        
    }
}

let auto = new Auto("Ka","Ford",100)
let bici = new Bicicleta(26,10)

auto.mover()
bici.mover()