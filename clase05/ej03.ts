// 1. Modifica el objeto del ejercicio anterior para que incluya un método
// llamado descripcion() que devuelva una descripción del libro.
// 2. Llama al método y muestra el resultado en la consola.

import {Libro} from "./ej02"

class LibroConDescripcion extends Libro {
    descripcion(): string {
        return `El libro "${this.titulo}" fue escrito por ${this.autor} y publicado en el año ${this.anio}.`
    }
}

let libro1 = new LibroConDescripcion("Los peligros de fumar en la cama", "Mariana Enriquez", 2009)

console.log(libro1.descripcion())