/**Consigna: Crea una clase base Zoologico con el método abrirPuertas(), que
indique que el zoológico está abierto. Crea una clase derivada ZoologicoSafari
que sobrescriba el método abrirPuertas() pero llamando al método de la clase
base con super. */

class Zoologico{
     abrirPuertas():void{
        console.log(`Las puertas están abiertas`)
     }
}

class ZoologicoSafari extends Zoologico{
   
    abrirPuertas():void{
        super.abrirPuertas()
        console.log(`¡Vayamos a aprender!`)
    }
    
}

let zoo = new Zoologico
let saf = new ZoologicoSafari


console.log(`----- Zoológico -----`)
zoo.abrirPuertas()
console.log(`----- Safari -----`)
saf.abrirPuertas()