/**1. Crea un pequeño sistema de gestión de Animales que incluya las clases
Animal, Mascota, y MascotaExotica.
o La clase Animal debe tener propiedades como nombre y tipo.
o La clase Mascota debe extender Animal e incluir una propiedad para
dueño.
o La clase MascotaExotica debe extender Animal e incluir una
propiedad para habitat.
2. Implementa métodos para mostrar información sobre cada tipo de animal
y agrega ejemplos de instanciación.
*/

class Animal {
    nombre: string
    tipo: string

    constructor(nombre:string, tipo:string){
        this.nombre = nombre
        this.tipo = tipo
    }

    mostrarInformacion(): void {
        console.log(`Animal: ${this.nombre}, Tipo: ${this.tipo}`);
    }

}

class Mascota extends Animal {
    dueño: string;

    constructor(nombre: string, tipo: string, dueño: string) {
        super(nombre, tipo);
        this.dueño = dueño;
    }

    mostrarInformacion(): void {
        console.log(`Mascota: ${this.nombre}, Tipo: ${this.tipo}, Dueño: ${this.dueño}`);
    }
}

class MascotaExotica extends Animal{
    habitat : string

    constructor(nombre: string, tipo: string, habitat: string) {
        super(nombre, tipo);
        this.habitat = habitat;
    }

    mostrarInformacion(): void {
        console.log(`Mascota: ${this.nombre}, Tipo: ${this.tipo}, Habitat: ${this.habitat}`)
    }
}

let animal1= new Animal("Juan","Lagartija")
let mascota1 = new Mascota("Saori","Gato","Fauno")
let mascotaExotica1 = new MascotaExotica("Juanita","Serpiente","Jungla")

console.log("----- Animal -----")
animal1.mostrarInformacion()
console.log("----- Mascota -----")
mascota1.mostrarInformacion()
console.log("----- Mascota Exótica -----")
mascotaExotica1.mostrarInformacion()