/**Ejercicio 4: Abstracción con Clases Abstractas
Implementa una clase abstracta DispositivoElectronico con métodos abstractos
encender y apagar. Crea dos clases concretas Televisor y Radio, que
sobrescriban estos métodos. */

abstract class DispositivoElectronico{
    abstract encender(): void

    abstract apagar():void
}

class Televisor extends DispositivoElectronico{

    encender(): void {
        console.log(`La televisión está encendida.`)
    }

    apagar(): void {
        console.log(`La televisión está apagada.`)

    }

}

class Radio extends DispositivoElectronico{

    encender(): void {
        console.log(`La radio está encendida.`)
    }

    apagar(): void {
        console.log(`La radio está apagada.`)

    }

}

let tele = new Televisor
let radio = new Radio

tele.encender()
tele.apagar()

radio.encender()
radio.apagar()