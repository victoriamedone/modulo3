// Consigna: Crea una función llamada listarLibros que acepte un array de objetos
// libro, donde cada libro tiene las propiedades titulo (string) y autor (string). La
// función debe recorrer el array y mostrar los detalles de cada libro en la consola.

let libros = [
    { titulo: "1984", autor: "George Orwell" },
    { titulo: "Noah", autor: "Sebastian Fitzek" },
    { titulo: "El resplandor", autor: "Stephen King" },
    { titulo: "Rayuela", autor: "Julio Cortázar" }
 ];
 
 function listarLibros(listaDeLibros: {titulo: string, autor: string}[]): string{
    let arregloDeLibros = listaDeLibros.map((libro) => {
    return `Libro: ${libro.titulo}. Autor: ${libro.autor}`});
    return arregloDeLibros.join('\n')
 };
 
 console.log(listarLibros(libros))