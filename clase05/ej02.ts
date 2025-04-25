// 1. Define un objeto que represente un libro con las siguientes propiedades:
// título, autor, y año de publicación.
// 2. Crea una instancia de ese objeto y muestra sus propiedades en la consola.
 
export class Libro {
    titulo: string
    autor: string
    anio: number

    constructor(titulo: string, autor: string, anio: number){
        this.titulo = titulo
        this.autor = autor
        this.anio = anio
    };

    imprimir() {
        return ("El titulo del libro es: " + this.titulo + ", el/la autor/a es: " +
        this.autor + ", y fue publicado en el año: " + this.anio)
    }
    
}

let libro1 = new Libro("Los peligros de fumar en la cama", "Mariana Enriquez", 2009)

libro1.imprimir()