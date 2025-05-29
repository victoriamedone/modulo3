/**Comparación Completa - Sistema de Transporte Público
Diseña un sistema que combine interfaces y clases abstractas para gestionar un
transporte público.
• Crea una clase abstracta Transporte con un método abstracto mover().
• Define dos interfaces:
o Electrico con el método cargarBateria().
o Combustible con el método llenarTanque().
• Implementa dos clases:
o AutobusElectrico: Extiende de Transporte e implementa Electrico.
o Taxi: Extiende de Transporte e implementa Combustible. */

abstract class Transporte{
    abstract mover():void
}

interface Electrico{
    cargarBateria():void
}

interface Combustible{
    llenarTanque(): void
}

class AutobusElectrico extends Transporte implements Electrico{

    mover(){
        console.log(`El autobús eléctrico se mueve!`)
    }

    cargarBateria(): void {
        console.log(`Cargando batería del vehículo`)
    }

}

class Taxi extends Transporte implements Combustible{

    mover(){
        console.log(`El taxi se mueve!`)
    }

    llenarTanque(): void {
        console.log(`Llenando tanque del vehículo`)
    }

}

let autobus = new AutobusElectrico
autobus.mover()
autobus.cargarBateria()

let taxi = new Taxi
taxi.mover()
taxi.llenarTanque()