/**Ejercicio 4: Clases y Objetos
1. Define una clase llamada Animal con propiedades nombre y tipo, y un
método hacerSonido().
2. Crea una instancia de la clase Animal y llama al método.
*/

class Animal {
    nombre : string
    tipo: string

    constructor(nombre: string , tipo:string){
        this.nombre  =  nombre 
        this.tipo  =  tipo
    }

    hacerSonido() {
        console.log(`El/La ${this.tipo} llamada/o ${this.nombre} ha hecho un sonido!`)
    }
}

let animal1 = new Animal("Viko","Cabra")
animal1.hacerSonido()