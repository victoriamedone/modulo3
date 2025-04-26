/**Crea una interfaz Usuario que tenga las propiedades:
• nombre (obligatoria).
• edad (opcional).
• readonly id (solo lectura).
Implementa esta interfaz en una clase UsuarioConcreto. Luego, intenta
modificar la propiedad id para mostrar cómo se aplican las restricciones de solo
lectura. */

interface Usuario{
    nombre : string
    edad? : number
    readonly id: any 

    mostrarInfo(): void

}

class UsuarioConcreto implements Usuario{

    nombre : string
    edad? : number
    readonly id: any 

    constructor(nombre: string, id: number, edad?: number) {
        this.nombre = nombre
        this.id = id
        this.edad = edad
    }

    mostrarInfo(): void {
        console.log(`ID: ${this.id}, Nombre: ${this.nombre}, Edad: ${this.edad ?? "No especificada"}`);
    }
    
}

const usuario = new UsuarioConcreto("Juan", 123, 25);

console.log(`----- Antes de modificar -----`)
usuario.mostrarInfo();

usuario.nombre = "Pedro"; 
usuario.edad = 30; 
// usuario.id = 456; // Error porque `id` es de solo lectura

console.log(`----- Después de modificar -----`)
usuario.mostrarInfo();