/**Crea una clase Libro que represente un libro en una biblioteca. Esta clase debe
tener propiedades privadas para titulo, autor, anioPublicacion, y disponible.
Implementa métodos para prestar y devolver el libro, asegurando que solo se
pueda prestar si está disponible y que se pueda devolver solo si ha sido
prestado. Imprime un mensaje en caso de que se intente realizar una acción no
válida. */

class Libro {
    private titulo : string
    private autor: string
    private anioPublicacion : number
    private disponible : boolean

    constructor(titulo : string, autor: string, anioPublicacion : number, disponible : boolean ){
        this.titulo = titulo
        this.autor = autor
        this.anioPublicacion = anioPublicacion
        this.disponible = disponible
    }

    private librosPrestados: Libro[] = []

    prestarLibro(libro:Libro){
    
        if(this.disponible == true){
            this.librosPrestados.push(libro)
            console.log(`Libro prestado: ${this.titulo}`)
            this.disponible = false
        } else {
            console.log(`Éste libro no está disponible para ser prestado.`)
        }
    }


    devolverLibro(libro: Libro): void {
        if (this.librosPrestados.includes(libro)) {
            const index = this.librosPrestados.indexOf(libro)
            if (index > -1) {
                this.librosPrestados.splice(index, 1)
                console.log(`Libro devuelto: ${libro.titulo}`)
                this.disponible = true
            }
        } else {
            console.log(`El libro no está en la lista de libros prestados.`)
        }
    }

    toJSON() {
        return {
            titulo: this.titulo,
            autor: this.autor,
            anioPublicacion: this.anioPublicacion,
            disponible: this.disponible,
        };
    }

  
}

const librazo = new Libro("Noah", "Sebastian Fitzek", 2015, true)

librazo.prestarLibro(librazo)
console.log(librazo.toJSON())
librazo.devolverLibro(librazo)
console.log(librazo.toJSON())


